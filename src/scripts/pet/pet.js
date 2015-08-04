//=require sprite.js
//=require soul.js
//=require body.js

function Pet(petName)
{
	this.name = petName;

	this.soul = new Soul(this);
	this.body = new Body(this);

	this.soul.elements.setMaximumFromArray(this.body.species.elements);
	var arr = this.soul.elements.toArray();

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
	this.soul.highestElement = highest;

	this.runDay = function()
	{
		this.body.dust.changeCurrent(RandomInt(15, 5));
	};
};

$(function()
{
	pet = new Pet("");

	changePetSprite("egg/egg_" + pet.soul.highestElement.name, "egg/egg_n");
});
