//=require element.js

function Soul(pet)
{
	this.pet = pet;

	this.elements = new Elements();

	this.highestElement = null;

	this.mana = new SettableInt(10);
};
