updateLists =
{
	show: [],
	iftrue: []
};

function updateElements()
{
	for (var i = 0; i < updateLists.show.length; i++)
	{
		var curUpdate = updateLists.show[i];
    	eval("curUpdate.innerHTML = " + curUpdate.dataset.showvariable);
	}
	for (var i = 0; i < updateLists.iftrue.length; i++)
	{
		var curUpdate = updateLists.iftrue[i];
		var ifTrue = $(curUpdate).children(".ifTrue");
		var ifFalse = $(curUpdate).children(".ifFalse")
		if (eval(curUpdate.dataset.iftrue))
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
