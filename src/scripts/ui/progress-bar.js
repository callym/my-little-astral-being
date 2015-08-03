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

		if (EqualArrays(updateLists.progressVariables[i], [value, max]))
		{
			//continue; /* can't comtinue bc it was removing the labels when I did */
		}
    	updateLists.progressVariables[i] = [value, max];

		if (max < 1)
		{
			$(cur).css("display", "none");
		}

		$(cur).css("width", ((max/10) * 100) + "%");

		if (value == 0 || value == max)
		{
			continue;
		}

		var e = document.createElement("div");
		var $e = $(e);
		$e.css("text-align", "right");
		$e.css("width", "calc(" + ((value/10) * 100) + "% + 0.5ex)");
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
