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
		if (EqualArrays(updateLists.radialMenuVariable[i], value))
		{
			continue;
		}

		updateLists.radialMenuVariable[i] = value;

		var circle = document.createElement("ul");
		circle.classList.add("circle");
		curUpdate.appendChild(circle);

		for (var i = 0; i < value.length; i++)
		{
			if (i == 0)
			{
				var item = document.createElement("a");
				item.appendChild(document.createTextNode(value[i]));
				item.onclick = function(e)
				{
					e.preventDefault();
					circle.classList.toggle("open");
				};
				item.classList.add("menu-button");

				curUpdate.appendChild(item);
			}

			else
			{
				var item = document.createElement("li");

				item.appendChild(document.createTextNode(value[i]));

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
	item.style.top = (50 + (radius * (Math.sin(radians)))).toFixed(4) + "%";
};

window.addEventListener('resize',
function()
{
	for (var i = 0; i < updateLists.radialMenu.length; i++)
	{
		var curUpdate = updateLists.radialMenu[i];

		var listItems = $(curUpdate).children(".circle").children("li")
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
