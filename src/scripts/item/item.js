function Item()
{
	var self = this;
	this.name = "";

	this.elementsMaximum = new Elements();
	this.elementsCurrent = new Elements();

	var arrMax = this.elementsMaximum.toArray();
	var arrCur = this.elementsCurrent.toArray();
	var p = 5;
	while (p > 0)
	{
		var i = Math.floor(Math.random() * arrMax.length);
		var value = RandomInt(5);
		if (Math.random() < 0.5)
		{
			arrCur[i].level.setMaximum(value);
		}
		else
		{
			arrMax[i].level.setMaximum(value);
		}
		p -= value;
	}

	var colourPrefix = [
	"pale", "pastel", "subdued",
	"bright", "neon",
	"dark", "stormy", "musty",
	"glowing", "incandescent", "iridescent", "holographic"
	];

	var colour = [
	"red", "ruby", "blood red", "orange", "dying embers", "gold",
	"yellow", "sunshine yellow", "buttercup yellow", "lemon",
	"green", "lime", "forest", "spring leaves",
	"blue", "bubblegum blue", "sky blue", "teal", "turquoise",
	"purple", "pink", "candyfloss pink",
	"black", "white", "grey", "silver",
	"beige", "brown", "magnolia", "cream"
	];

	var item = [
	"necklace", "jewel", "gem", "tiara", "crown", "ring",
	"usb stick", "floppy disk", "cd-rom"
	];
	this.name = GetRandomFromArray(colourPrefix) + " " +
				GetRandomFromArray(colour) + " " +
				GetRandomFromArray(item);

	this.equip = function()
	{
		var arrPet = pet.soul.elements.toArray();
		var arrMax = self.elementsMaximum.toArray();
		var arrCur = self.elementsCurrent.toArray();

		for (var i = 0; i < arrPet.length; i++)
		{
			var newMax = arrMax[i].level.maximum;
			var newCur = arrCur[i].level.maximum;

			if (newMax != 0)
			{
				arrPet[i].changeMaximum(newMax);
			}

			if (newCur != 0)
			{
				arrPet[i].changeCurrent(newCur);
			}
		}

		TriggerEvents("pet:action");
	};

	this.toTableArray = function()
	{
		var t = [];

		var arrMax = self.elementsMaximum.toArray();
		var arrCur = self.elementsCurrent.toArray();

		for (var i = 0; i < arrMax.length; i++)
		{
			var newMax = arrMax[i].level.maximum;
			var newCur = arrCur[i].level.maximum;
			if (newMax == 0 && newCur == 0)
			{
				continue;
			}

			var img = "<img src='" + arrMax[i].sprite + "' height='32' width='32'>";
			var newMaxTable = "+<span data-showvariable='newItem.elementsMaximum." +
								arrMax[i].name + ".level.maximum'>" +
								arrMax[i].level.maximum +
								"</span>";
			var newCurTable = "+<span data-showvariable='newItem.elementsCurrent." +
								arrCur[i].name + ".level.maximum'>" +
								arrCur[i].level.maximum +
								"</span>";
			t.push([img, newCurTable, newMaxTable]);
		}

		var classes = ["shrink", "shrink", "shrink"];

		return [false, classes, t];
	};
};

Item.prototype.articleName = function()
{
	return AvsAnSimple.query(this.name) + " " + this.name;
};

newItem = new Item();
