/*
<a data-cyclinglink='{ "variable": "player.appearance.hair.style", "type": "desc",
"options": [
"long, wavy mane",
"short, spiky do",
"slick, smooth bob"
]}'></a>
*/

$("[data-setvariable]").each(function()
{
	var t = $(this);
	this.innerHTML = "OK";
	t.data("triggered", false);
	t.click(function(event)
	{
		var t = $(this);
		HTMLtoVariable(this);

	    if (!t.data("repeat"))
	    {
	    	t.off(event);
	    	t.addClass("fired");
	    }
	    console.log("fired");
	});
});

function HTMLtoVariable(t)
{
	var variableObject = JSON.parse(t.dataset.setvariable);
	var v = variableObject.variable;
	var e = $(variableObject.element)[0];
	var vType = variableObject.type.toLowerCase();

	if (vType === "desc")
	{
		var text = e.innerHTML;
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
}
