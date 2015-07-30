/*
	element should output an array of strings
	[
	DATA,
	DATA,
	DATA
	]

	<table data-arraytotable="pet.soul.elements.toListArray()"></table>
*/

if (typeof updateLists == "undefined")
{
	updateLists = {};
}
updateLists.lists = [];
updateLists.listsVariable = [];

function updateList()
{
	for (var i = 0; i < updateLists.lists.length; i++)
	{
		var curUpdate = updateLists.lists[i];
		var value = eval(curUpdate.dataset.arraytolist);
		if (EqualArrays(updateLists.listsVariable[i], value))
		{
			continue;
		}

		updateLists.listsVariable[i] = value;
		for (var i = 0; i < value.length; i++)
		{
			var item = document.createElement("li");

			item.appendChild(document.createTextNode(value[i]));

			curUpdate.appendChild(item);
		}
	}
};

runOnDOMChange(function()
{
	updateLists.lists = document.querySelectorAll("[data-arraytolist]");
	setIntervals([updateList, 10]);
});
