//=require element.js

function Soul(pet)
{
	this.pet = pet;

	this.elements = new Elements();

	this.mana = new SettableInt(10);
};
