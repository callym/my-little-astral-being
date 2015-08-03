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

function updateList(curUpdate, i)
{
	var curUpdate = updateLists.lists[i];
	var value = GetFunction(curUpdate.dataset.arraytolist);
	if (EqualArrays(updateLists.listsVariable[i], value))
	{
		return;
	}

	updateLists.listsVariable[i] = value;
	for (var i = 0; i < value.length; i++)
	{
		var item = document.createElement("li");

		item.appendChild(document.createTextNode(value[i]));

		curUpdate.appendChild(item);
	}
};

runOnDOMChange(function()
{
	updateLists.lists = document.querySelectorAll("[data-arraytolist]");
	registerEvent(updateLists.lists, updateList);
});
