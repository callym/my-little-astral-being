/*
	element should output an array of arrays
	[true *** false if there is no header ***
	[class1, class2, ... class n]
	[[COLUMN 1 HEADER, COLUMN 2 HEADER, 	... 	COLUMN N HEADER],
	[COLUMN 1 DATA 1, COLUMN 2 DATA 1,	...		COLUMN N DATA 1],
	...
	[COLUMN 1 DATA N, COLUMN 2 DATA N, 	...		COLUMN N DATA N]]
	]

	<table data-arraytotable="pet.soul.elements.toTableArray()"></table>
*/

if (typeof updateLists == "undefined")
{
	updateLists = {};
}
updateLists.tables = [];
updateLists.tablesVariable = [];

function updateTable(curUpdate, i)
{
	var value = GetFunction(curUpdate.dataset.arraytotable);

	if (EqualArrays(updateLists.tablesVariable[i], value))
	{
		return;
	}

	updateLists.tablesVariable[i] = value;
	curUpdate.innerHTML = "<tbody></tbody>";
	tableBody = curUpdate.getElementsByTagName("tbody")[0];
	var hasHeader = value[0];
	var classData = value[1];
	var data = value[2];
	for (var j = 0; j < data.length; j++)
	{
		var row = null;
		if (j == 0 && hasHeader)
		{
			head = curUpdate.createTHead();
			row = head.insertRow(0);
		}
		else
		{
			row = tableBody.insertRow(-1);
		}
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

	$(document).trigger("ui:table:change");
};

runOnDOMChange(function()
{
	updateLists.tables = document.querySelectorAll("[data-arraytotable]");
	registerEvent(updateLists.tables, updateTable);
});
