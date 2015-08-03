/*
<span data-showvariable="pet.soul.elements.toString()"></span>
*/

if (typeof updateLists == "undefined")
{
	updateLists = {};
}
updateLists.progress = [];

function updateProgress(cur, i)
{
	var si = GetFunction(cur.dataset.progress, false);
	var value = cur.value = si.current;
	var max = cur.max = si.maximum;

	if (max < 1)
	{
		$(cur).css("display", "none");
	}
	else
	{
		$(cur).css("display", "");
	}

	$(cur).css("width", ((max/10) * 100) + "%");

	if (value == 0 || value == 10)
	{
		return;
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
};

runOnDOMChange(function()
{
	updateLists.progress = document.getElementsByTagName("progress");
	registerEvent(updateLists.progress, updateProgress);
});
