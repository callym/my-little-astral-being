/*
<span data-showvariable="pet.soul.elements.toString()"></span>
*/

if (typeof updateLists == "undefined")
{
	updateLists = {};
}
updateLists.progress = [];
updateLists.progressVariables = [];

function updateProgress(cur, i)
{
	var si = GetFunction(cur.dataset.progress, false);
	var maxMax = cur.dataset.max;
	var value = cur.value = si.current;
	var max = cur.max = si.maximum;

	if (EqualArrays(updateLists.progressVariables[i], [value, max]))
	{
		return;
	}
	updateLists.progressVariables[i] = [value, max];

	if (max < 1)
	{
		$(cur).css("display", "none");
	}
	else
	{
		$(cur).css("display", "");
	}

	$(cur).css("width", ((max/maxMax) * 100) + "%");

	var overlayElement = $(cur.parentElement).children(".progressbar-overlay");
	var e;
	var $e;

	if (overlayElement.length <= 0)
	{
		e = document.createElement("div");
		$e = $(e);
	}
	else
	{
		e = overlayElement[0];
		$e = overlayElement;
	}

	if (value == 0 || value == maxMax)
	{
		$e.css("display", "none");
		return;
	}
	else
	{
		$e.css("display", "");
	}

	$e.fadeOut(400, function()
	{
		$e.css("width", "calc(" + ((value/maxMax) * 100) + "% + 0.5ex)");
		$e.addClass($(cur).attr("class") + "-lighter");
		$e.addClass("outlineText");
		$e.addClass("progressbar-overlay");
		e.innerHTML = value;
		$e.fadeIn(400);
	});

	$(cur.parentElement).css("position", "relative");

	if (overlayElement.length <= 0)
	{
		cur.parentElement.appendChild(e);
	}
};

runOnDOMChange(function()
{
	updateLists.progress = document.getElementsByTagName("progress");
	registerEvent(updateLists.progress, updateProgress);
});
