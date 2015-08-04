if (typeof updateLists == "undefined")
{
	updateLists = {};
}
updateLists.cyclinglink = [];

runOnDOMChange(function()
{
	var newUpdateList = document.querySelectorAll("[data-cyclinglink]");

	for (var i = 0; i < newUpdateList.length; i++)
	{
		if (GetXPath(updateLists.cyclinglink[i]) == GetXPath(newUpdateList[i]))
		{
			continue;
		}
		updateLists.cyclinglink[i] = newUpdateList[i];

		newUpdateList[i].classList.add("cycling-link");
		var qt = $(newUpdateList[i]);
		nextCyclingLink(newUpdateList[i]);
		qt.click(function(event)
		{
			nextCyclingLink(this);
		});
	}
});

function nextCyclingLink(thisLink)
{
	var cyclingLinkObject = JSON.parse(thisLink.dataset.cyclinglink);
	var v = cyclingLinkObject.variable;
	var cycleType = cyclingLinkObject.type.toLowerCase();
	var options = cyclingLinkObject.options;
	var current = thisLink.textContent;
	var currentIndex = 0;

	if (options[0].constructor === Array)
	{
		currentIndex = options.map(function (element) {return element[0]; }).indexOf(current);
	}
	else
	{
		currentIndex = options.indexOf(current);
	}

	var nextIndex = currentIndex;

	if (currentIndex >= (options.length - 1) || currentIndex == -1)
	{
		nextIndex = 0;
	}
	else
	{
		nextIndex++;
	}

	if (cycleType === "desc")
	{
		thisLink.textContent = options[nextIndex];
		eval(v + " = '" + options[nextIndex] + "'");
	}
	else if (cycleType.indexOf("maths") > -1)
	{
		thisLink.textContent = options[nextIndex][0];
		var op = " = ";
		if 		(cycleType === "mathsadd") 		{ op = "ADD"; }
		else if (cycleType === "mathssubtract") { op = "SUBTRACT"; }
		else if (cycleType === "mathsdivide")	{ op = "DIVIDE"; }
		else if (cycleType === "mathsmultiply") { op = "MULTIPLY"; }
		if (currentIndex != -1)
		{
			eval(v + Maths.Reverse[op] + options[currentIndex][1]);
		}
		eval(v + Maths.Operators[op] + options[nextIndex][1]);
	}
    else if (cycleType.indexOf("set") > -1)
    {
    	thisLink.textContent = options[nextIndex][0];
    	eval(v + " = " + options[nextIndex][1]);
        console.log(options[nextIndex][1]);
    }
    if (thisLink.innerHTML == thisLink.textContent)
	{
		var cycleLinkIcon = document.createElement("i");
		cycleLinkIcon.classList.add("cycleLinkIcon", "fa", "fa-circle-o-notch", "fa-spin");
		$(thisLink).prepend(cycleLinkIcon);
	}
};
