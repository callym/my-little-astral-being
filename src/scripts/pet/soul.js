//=require element.js

function Soul(pet)
{
	this.pet = pet;

	this.elements = new Elements();

	this.highestElement = null;

	this.mana = new SettableInt(100, 0, "pet:soul:mana:change");
	this.mana.setCurrent(100);

	this.batheInLight = function()
	{
		this.mana.changeCurrent(RandomInt(15, 5));
	};

	$(document).on("pet:soul:mana:change", function()
	{
		if (pet.soul.mana.current == 0)
		{
			pet.death(pet.name + " relies on light to survive, however you kept them in the dark for so long that they starved.");
			TriggerEvents("pet:death:bad");
		}
		else if (pet.soul.mana.current == 100)
		{
			var randomElement = GetRandomFromArray(pet.soul.elements.toArray());
			randomElement.changeCurrent(1);
			pet.soul.mana.setCurrent(50);
		}
	});

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

		$(document).on("pet:element:" + highest.name + ":change", function()
		{
			if (pet.soul.highestElement.level.current == pet.soul.highestElement.level.maximum)
			{
				pet.death("<p>" + pet.name + " starts to glow with celestial light.</p>" +
							"<p>When the light fades, there is nothing left of " +
							pet.name + ", and you realise that they have returned back to the elemental plane.");
				TriggerEvents("pet:death:good");
			}
		});
	};
};
