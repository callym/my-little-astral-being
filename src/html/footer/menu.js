var tabEffect = { effect: "fade", duration: 500, easing: "linear" };
$("#menu").tabs(
{
	hide: tabEffect,
	show: tabEffect,
});

$("#polish").button().click(function(e)
{
	e.preventDefault();
	TriggerEvents("pet:action");
	pet.body.polish();
});

$("#moonlight").button().click(function(e)
{
	e.preventDefault();
	TriggerEvents("pet:action");
	pet.soul.batheInLight();
});

$("#search").button().click(function(e)
{
	e.preventDefault();
	TriggerEvents("pet:action");
	newItem = new Item();

	var value = newItem.toTableArray();
	var curUpdate = document.getElementById("pet-search-dialog-table");

	curUpdate.innerHTML = "";
	tableBody = curUpdate.getElementsByTagName("tbody")[0];
	var classData = value[1];
	var data = value[2];
	for (var j = 0; j < data.length; j++)
	{
		var row = curUpdate.insertRow(-1);
		for (var k = 0; k < data[j].length; k++)
		{
			var cell = row.insertCell(k);
			if (classData[k] != "")
			{
				cell.className += classData[k];
			}
			cell.innerHTML = data[j][k];
		}
	}

	console.log(newItem);
	$("#pet-search-dialog-content").html("blah");
	$("#pet-search-dialog").dialog("open");
});
