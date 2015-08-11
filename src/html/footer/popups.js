$startupDialog = $("#startup-dialog-ui-guide");

$("#startup-dialog").dialog();

$("#startup-dialog-ui-guide").dialog(
{
	close: function()
	{
		$("#startup-dialog").dialog("open");
	}
});

$("#startup-dialog-elements-guide").dialog(
{
	width: 700,
	close: function()
	{
		startGame();
	}
});

$("#startup-dialog").find(".close").on("click", function()
{
	$("#startup-dialog-elements-guide").dialog("open");
});

$("#startup-dialog").find(".skip").on("click", function()
{
	$("#startup-dialog").dialog("close");
	startGame();
});

$startupDialog.dialog("open");

function startGame()
{
	$("#pet-name-dialog").dialog("open");
};

$("#pet-name-dialog").dialog(
{
	close: function()
	{
		pet.death("a heavy book falls onto " + pet.name + ", who shatters into a million tiny shards.");

		$("#content").fadeIn(1000, function()
		{
			$("#content").removeClass("hide");
		});
	}
});

$("#pet-death-dialog-bad").dialog();
$("#pet-death-dialog-good").dialog();

$(document).on("pet:death:good", function()
{
	$("#pet-death-dialog-good").dialog("open");
});

$(document).on("pet:death:bad", function()
{
	$("#pet-death-dialog-bad").dialog("open");
});

$("#pet-search-dialog").dialog();

$("#pet-search-dialog").find(".look").on("click", function()
{
	$("#pet-search-dialog").dialog("close");
	if (Math.random() < 0.5)
	{
		$("#pet-search-dialog-item").dialog("open");
	}
	else
	{
		$("#pet-search-dialog-unlucky").dialog("open");
	}
});

$("#pet-search-dialog-unlucky").dialog();

$("#pet-search-dialog-item").dialog();

$("#pet-search-dialog-item").find(".equip").on("click", function()
{
	$("#pet-search-dialog-item").dialog("close");
	newItem.equip();
});
