/*
	element should output an array of arrays
	[
	[COLUMN 1 HEADER 	... 	COLUMN N HEADER],
	[COLUMN 1 DATA 1	...		COLUMN N DATA 1],
	...
	[COLUMN 1 DATA N 	...		COLUMN N DATA N]
	]
*/

if (typeof updateLists == "undefined")
{
	updateLists = {};
}
updateLists.tables = [];
updateLists.tablesVariable = [];

function updateTable()
{
	for (var i = 0; i < updateLists.tables.length; i++)
	{
		var curUpdate = updateLists.tables[i];
		var value = eval(curUpdate.dataset.arraytotable);
		if (EqualArrays(updateLists.tablesVariable[i], value))
		{
			continue;
		}

		updateLists.tablesVariable[i] = value;
		curUpdate.innerHTML = "<tbody></tbody>";
		tableBody = curUpdate.getElementsByTagName("tbody")[0];
		for (var i = 0; i < value.length; i++)
		{
			var row = null;
			if (i == 0)
			{
				head = curUpdate.createTHead();
				row = head.insertRow(0);
			}
			else
			{
				row = tableBody.insertRow(-1);
			}
			for (var j = 0; j < value[i].length; j++)
			{
				var cell = row.insertCell(j);
				cell.innerHTML = value[i][j];
			}
		}
	}
};

updateLists.tables = document.querySelectorAll("[data-arraytotable]");
setInterval(function()
{
	updateTable();
}, 10);
