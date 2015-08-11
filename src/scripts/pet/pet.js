//=require sprite.js
//=require soul.js
//=require body.js

function Pet(petName)
{
	this.name = petName;

	this.soul = new Soul(this);
	this.body = new Body(this);
	this.soul.init();

	this.energy = new SettableInt(100, 0, "pet:energy:change");
	this.energy.setCurrent(100);

	$(document).on("pet:action", function()
	{
		pet.energy.changeCurrent(-25);
	});

	$(document).on("pet:energy:change", function()
	{
		if (pet.energy.current == 0)
		{
			$(".action").button("disable");
		}
		else
		{
			$(".action").button("enable");
		}
	});

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
		this.body.dust.changeCurrent(RandomInt(30, 10));
		this.soul.mana.changeCurrent(-RandomInt(21, 9));
		this.energy.setCurrent(100);
	};
};

$(function()
{
	pet = new Pet("");

	changePetSprite("egg/egg_" + pet.soul.highestElement.name, "egg/egg_n");
});
