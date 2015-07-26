/*
<a data-setvariable='{ "variable": "player.appearance.hair.style", "type": "desc",
"options": [
"long, wavy mane",
"short, spiky do",
"slick, smooth bob"
]}'>OK</a>
*/

if (typeof updateLists == "undefined")
{
	updateLists = {};
}
updateLists.OK = [];

runOnDOMChange(function()
{
	var newUpdateList = document.querySelectorAll("[data-setvariable]");

	if (EqualArrays(newUpdateList, updateLists.OK))
	{
		return;
	}

	for (var i = 0; i < newUpdateList.length; i++)
	{
		if (typeof updateLists.OK == "undefined")
		{
			updateLists.OK = newUpdateList;
		}

		if (updateLists.OK.indexOf(newUpdateList[i]) != -1)
		{
			continue;
		}

		var qt = $(newUpdateList[i]);
		qt.click(function(event)
		{
			HTMLtoVariable(this);
		});
	}

	updateLists.OK = newUpdateList;
});

function HTMLtoVariable(t)
{
	var variableObject = JSON.parse(t.dataset.setvariable);
	var v = variableObject.variable;
	var e = $(variableObject.element)[0];
	var vType = variableObject.type.toLowerCase();

	if (vType === "desc")
	{
		var text = e.innerText;
		var exp = v + " = '" + text + "'";
		eval(exp);
	}
	else if (vType.indexOf("maths") > -1)
	{
		thisLink.innerHTML = options[nextIndex][0];
		var op = " = ";
		if 		(vType === "mathsadd") 		{ op = "ADD"; }
		else if (vType === "mathssubtract") { op = "SUBTRACT"; }
		else if (vType === "mathsdivide")	{ op = "DIVIDE"; }
		else if (vType === "mathsmultiply") { op = "MULTIPLY"; }

		eval(v + Maths.Operators[op] + e.innerText);
	}
    else if (vType.indexOf("set") > -1)
    {
    	eval(v + " = " + e.innerText);
    }

    if ($(e).attr("contenteditable") == "true")
    {
        $(e).attr("contenteditable", "false");
    }
};
