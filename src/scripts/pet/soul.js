//=require element.js

function Soul(pet)
{
	this.pet = pet;

	this.elements = new Elements();

	this.highestElement = null;

	this.mana = new SettableInt(10);

	this.init = function()
	{
		this.elements.setMaximumFromArray(this.pet.body.species.elements);
		var arr = this.elements.toArray();

		var highest = null;
		for (var i = 0; i < arr.length; i++)
		{
			if (highest == null)
			{
				highest = arr[i];
			}
			else if (arr[i].level.maximum > highest.level.maximum)
			{
				highest = arr[i];
			}
		}
		this.highestElement = highest;
	};
};
