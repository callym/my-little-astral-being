/*
<span data-showvariable="pet.soul.elements.toString()"></span>
*/

if (typeof updateLists == "undefined")
{
	updateLists = {};
}
updateLists.show = [];
updateLists.showVariables = [];
updateLists.iftrue = [];
updateLists.iftrueVariables = [];

function updateElements()
{
	for (var i = 0; i < updateLists.show.length; i++)
	{
		var curUpdate = updateLists.show[i];
		var value = eval(curUpdate.dataset.showvariable);
		if (updateLists.showVariables[i] == value)
		{
			continue;
		}

    	curUpdate.innerHTML = value;
    	updateLists.showVariables[i] = value;
	}
	for (var i = 0; i < updateLists.iftrue.length; i++)
	{
		var curUpdate = updateLists.iftrue[i];
		var value = eval(curUpdate.dataset.ifTrue);
		if (updateLists.iftrueVariables[i] == value)
		{
			continue;
		}

		updateLists.iftrueVariables[i] = value;
		var ifTrue = $(curUpdate).children(".ifTrue");
		var ifFalse = $(curUpdate).children(".ifFalse")
		if (value)
		{
			if (ifTrue.length && ifFalse.length)
			{
				ifTrue.removeClass("hide");
				ifFalse.addClass("hide");
			}
			else
			{
				curUpdate.classList.remove("hide");
			}
		}
		else
		{
			if (ifTrue.length && ifFalse.length)
			{
				ifTrue.addClass("hide");
				ifFalse.removeClass("hide");
			}
			else
			{
				curUpdate.classList.add("hide");
			}
		}
	}
};

updateLists.show = document.querySelectorAll("[data-showvariable]");
updateLists.iftrue = document.querySelectorAll("[data-iftrue]");
setInterval(function()
{
	updateElements();
}, 10);
