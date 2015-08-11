function Elements()
{
	var self = this;
	this.air 	= new Element("air");
	this.earth 	= new Element("earth");
	this.fire 	= new Element("fire");
	this.water 	= new Element("water");
	this.spirit = new Element("spirit");

	this.toArray = function()
	{
		return [self.air, self.earth, self.fire, self.water, self.spirit];
	};

	this.toTableArray = function()
	{
		var t = [];
		var arr = self.toArray();
		for (var i = 0; i < arr.length; i++)
		{
			var img = "<img src='" + arr[i].sprite + "' height='32' width='32'>";
			var progress = 	"<progress data-event='pet:element:" + arr[i].name + ":change' class='" + arr[i].name +
							"' data-progress='pet.soul.elements." + arr[i].name + ".level'" +
							" data-max='10'></progress>";
			var max = "<span data-showvariable='pet.soul.elements." +
								arr[i].name + ".level.maximum'>" +
								arr[i].level.maximum +
								"</span>";
			t.push([img, progress, max]);
		}

		var classes = ["shrink", "progress-wrapper", "shrink rightText"];

		return [false, classes, t];
	};

	this.toListArray = function()
	{
		var t = ["Elements"];
		var arr = self.toArray()
		for (var i = 0; i < arr.length; i++)
		{
			t.push(arr[i].name + "<br/>(" + arr[i].level.current + "/" + arr[i].level.maximum + ")");
		}

		return t;
	};

	this.changeMaximumFromArray = function(arr)
	{
		var elements = self.toArray();
		if (arr.length != elements.length)
		{
			return;
		}
		for (var i = 0; i < arr.length; i++)
		{
			elements[i].level.changeMaximum(arr[i]);
		}
	};

	this.setMaximumFromArray = function(arr)
	{
		var elements = self.toArray();
		if (arr.length != elements.length)
		{
			return;
		}
		for (var i = 0; i < arr.length; i++)
		{
			elements[i].level.setMaximum(arr[i]);
		}
	};

	this.toString = function()
	{
		var arr = self.toArray();
		var s = "";

		for (var i = 0; i < arr.length; i++)
		{
			s += arr[i].name + ": " + arr[i].level.current + "/" + arr[i].level.maximum;
			if (i != arr.length - 1)
			{
				s += ", ";
			}
		}

		return s;
	};
};

function Element(name, level)
{
	this.name = name;

	level = level || 0;
	this.level = new SettableInt(level, 0, ["pet:element:change", "pet:element:" + name + ":change"]);

	this.sprite = "images/elements/" + name + ".png";

	this.maximum = function()
	{
		return this.level.maximum;
	};

	this.changeMaximum = function(i)
	{
		var newMax = this.level.maximum + i;
		if (newMax > 10)
		{
			newMax = 10;
		}
		this.setMaximum(newMax);
	};

	this.setMaximum = function(i)
	{
		var newMax = i;
		if (newMax > 10)
		{
			newMax = 10;
		}
		this.level.setMaximum(i);
	};

	this.current = function()
	{
		return this.level.current;
	};

	this.changeCurrent = function(i)
	{
		this.level.changeCurrent(i);
	};

	this.setCurrent = function(i)
	{
		this.level.setCurrent(i);
	};
};

function CreateRandomiseElements(points)
{
	points = points || 50;
	var elements = new Elements();
	var arr = elements.toArray();

	Shuffle(arr);

	while (points > 0)
	{
		for (var i = 0; i < arr.length; i++)
		{
			var rand = RandomInt(points);
			if ((points - rand) < 0)
			{
				rand = points;
			}
			arr[i].level.changeMaximum(rand);
			points -= rand;
			console.log(points);
		}
		Shuffle(arr);
	}

	return elements;
};
