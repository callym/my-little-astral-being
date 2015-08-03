/*
<span data-showvariable="pet.soul.elements.toString()"></span>
*/

if (typeof updateLists == "undefined")
{
	updateLists = {};
}
updateLists.progress = [];
updateLists.progressVariables = [];

function updateProgress()
{
	for (var i = 0; i < updateLists.progress.length; i++)
	{
		var cur = updateLists.progress[i];
		var value = cur.value;
		var max = cur.max;

		if (value == 0 || value == max)
		{
			continue;
		}

		if (EqualArrays(updateLists.progressVariables[i], [value, max]))
		{
			continue;
		}
    	updateLists.progressVariables[i] = [value, max];

		var e = document.createElement("div");
		var $e = $(e);
		$e.css("text-align", "right");
		$e.css("width", "calc(" + ((value/max) * 100) + "% + 0.5ex)");
		$e.css("bottom", "1.2ex");
		$e.css("position", "absolute");
		$e.addClass($(cur).attr("class") + "-lighter");
		$e.addClass("outlineText");
		e.innerHTML = value;
		$(cur.parentElement).css("position", "relative");
		cur.parentElement.appendChild(e);
	}
};

runOnDOMChange(function()
{
	updateLists.progress = document.getElementsByTagName("progress");
	setIntervals([updateProgress, 10]);
});
