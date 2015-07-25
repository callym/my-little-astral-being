function Elements()
{
	this.Light 	= new Element("Light");
	this.Dark 	= new Element("Dark");

	this.toArray = function()
	{
		return [this.Light, this.Dark];
	};

	this.toString = function()
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
};

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
