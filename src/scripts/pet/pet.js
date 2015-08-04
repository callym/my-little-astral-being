//=require sprite.js
//=require soul.js
//=require body.js

function Pet(petName)
{
	this.name = petName;

	this.soul = new Soul(this);
	this.body = new Body(this);
	this.soul.init();

	var _death = "";
	this.death = function(newString)
	{
		newString = newString || false;
		if (newString != false)
		{
			_death = newString;
		}
		return _death;
	};

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
