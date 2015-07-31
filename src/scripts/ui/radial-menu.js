if (typeof updateLists == "undefined")
{
	updateLists = {};
}
updateLists.radialMenu = [];
updateLists.radialMenuVariable = [];

function updateRadialMenu()
{
	for (var i = 0; i < updateLists.radialMenu.length; i++)
	{
		var curUpdate = updateLists.radialMenu[i];
		var value = eval(curUpdate.dataset.arraytoradialmenu);

		if (value[0] == "html" && updateLists.radialMenuVariable[i] != "html")
		{
			curUpdate.innerHTML = "";
			while (value[1].childNodes.length)
			{
			    curUpdate.appendChild(value[1].childNodes[0]);
			}
			curUpdate.dataset.arraytoradialmenu = true;
			calculateAllElementPositions(curUpdate);
			updateLists.radialMenuVariable[i] = "html";
			continue;
		}

		if (updateLists.radialMenuVariable[i] == "html")
		{
			continue;
		}

		if (EqualArrays(updateLists.radialMenuVariable[i], value))
		{
			continue;
		}

		updateLists.radialMenuVariable[i] = value;

		var circle = document.createElement("div");
		circle.classList.add("circle");
		circle.classList.add("center");
		curUpdate.appendChild(circle);

		for (var i = 0; i < value.length; i++)
		{
			if (i == 0)
			{
				if (curUpdate.dataset.submenu)
				{
					curUpdate.onclick = function(e)
					{
						e.stopPropagation();
						circle.classList.toggle("open");
					};
					curUpdate.classList.add("menu-button");
				}
				else
				{
					var item = document.createElement("a");
					item.appendChild(document.createTextNode(value[i]));
					item.onclick = function(e)
					{
						e.stopPropagation();
						circle.classList.toggle("open");
					};
					item.classList.add("menu-button");

					curUpdate.appendChild(item);
				}
			}

			else
			{
				var item = document.createElement("div");
				item.innerHTML = value[i];
				item.classList.add("item");
				item.onclick = function(e)
				{
					e.stopPropagation();
				};
				// take one bc we're ignoring the first element of the array
				calculateElementPosition(item, i - 1, value.length - 1);
				circle.appendChild(item);
			}
		}
	}
};

function calculateElementPosition(item, i, total)
{
	var radians = 2 * Math.PI * (i / total);
	var piCalc = -0.5 * Math.PI - (2 * (1 - (i + 1)) * (i) * Math.PI);

	var radius = 75 * getScale();
	item.style.left = (50 - (radius * (Math.cos(radians)))).toFixed(4) + "%";
	item.style.marginLeft = -($(item).getRealDimensions().width / 2) + "px";
	item.style.top = (50 + (radius * (Math.sin(radians)))).toFixed(4) + "%";
};

function calculateAllElementPositions(element)
{
	var listItems = $(element).children(".circle").children("div")
	var length = listItems.length;

	listItems.each(function(i)
	{
		calculateElementPosition(this, i, length);
	});
}

window.addEventListener('resize',
function()
{
	for (var i = 0; i < updateLists.radialMenu.length; i++)
	{
		var curUpdate = updateLists.radialMenu[i];

		var listItems = $(curUpdate).children(".circle").children("div")
		var length = listItems.length;

		listItems.each(function(i)
		{
			calculateElementPosition(this, i, length);
		});
	}
}, false);

runOnDOMChange(function()
{
	updateLists.radialMenu = document.querySelectorAll("[data-arraytoradialmenu]");
	setIntervals([updateRadialMenu, 10]);
});
