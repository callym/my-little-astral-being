$(".ok").each(function()
{
	var t = $(this);
	this.innerHTML = "OK";
	t.data("triggered", false);
	t.click(function(event)
	{
		var t = $(this);
		var elem = $(t.data("element"));

		eval(t.data("variable") + " = '" + elem.html() + "'");

		var value = $('#editablediv').attr('contenteditable');

	    if (elem.attr("contenteditable") == "true")
	    {
	        elem.attr("contenteditable", "false");
	    }

	    if (!t.data("repeat"))
	    {
	    	t.off(event);
	    	t.addClass("fired");
	    }
	    console.log("fired");
	});
});
