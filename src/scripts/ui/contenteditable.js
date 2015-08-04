if (typeof updateLists == "undefined")
{
	updateLists = {};
}
updateLists.contenteditable = [];

runOnDOMChange(function()
{
	var newUpdateList = document.querySelectorAll("[data-contenteditable]");

	if (EqualArrays(newUpdateList, updateLists.contenteditable))
	{
		return;
	}

	for (var i = 0; i < newUpdateList.length; i++)
	{
		if (typeof updateLists.contenteditable == "undefined")
		{
			updateLists.contenteditable = newUpdateList;
		}

		if (updateLists.contenteditable.indexOf(newUpdateList[i]) != -1)
		{
			continue;
		}

		var cycleLinkIcon = document.createElement("i");
		cycleLinkIcon.classList.add("contentEditableIcon", "fa", "fa-keyboard-o");
		newUpdateList[i].appendChild(cycleLinkIcon);

		var ce = document.createElement("span");
		ce.contentEditable = "true";
		ce.textContent = newUpdateList[i].dataset.initial;
		newUpdateList[i].appendChild(ce);
	}

	updateLists.contenteditable = newUpdateList;
});
