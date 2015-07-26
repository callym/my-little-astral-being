function Elements()
{
	this.Air 	= new Element("Air");
	this.Earth 	= new Element("Earth");
	this.Fire 	= new Element("Fire");
	this.Water 	= new Element("Water");
	this.Spirit = new Element("Spirit");
};

Elements.prototype.toArray = function()
{
	return [this.Air, this.Earth, this.Fire, this.Water, this.Spirit];
};

Elements.prototype.changeMaximumFromArray = function(arr)
{
	var elements = this.toArray();
	if (arr.length != elements.length)
	{
		return;
	}
	for (var i = 0; i < arr.length; i++)
	{
		elements[i].level.changeMaximum(arr[i]);
	}
};

Elements.prototype.setMaximumFromArray = function(arr)
{
	var elements = this.toArray();
	if (arr.length != elements.length)
	{
		return;
	}
	for (var i = 0; i < arr.length; i++)
	{
		elements[i].level.setMaximum(arr[i]);
	}
};

Elements.prototype.toString = function()
{
	var arr = this.toArray();
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
}

function Element(name, level)
{
	this.name = name;

	level = level || 0;
	this.level = new SettableInt(level);
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
