function Elements()
{
	this.Air 	= new Element("air");
	this.Earth 	= new Element("earth");
	this.Fire 	= new Element("fire");
	this.Water 	= new Element("water");
	this.Spirit = new Element("spirit");
};

Elements.prototype.toArray = function()
{
	return [this.Air, this.Earth, this.Fire, this.Water, this.Spirit];
};

Elements.prototype.toTableArray = function()
{
	var t = [];
	var arr = this.toArray();
	for (var i = 0; i < arr.length; i++)
	{
		var img = "<img src='" + arr[i].sprite + "' height='32' width='32'>";
		var progress = 	"<progress class='" + arr[i].name +
						"' max='" + arr[i].level.maximum +
						"' value='" + arr[i].level.current + "'></progress>"
		t.push([img, progress, arr[i].level.maximum]);
	}

	var classes = ["shrink", "", "shrink"];

	return [false, classes, t];
};

Elements.prototype.toListArray = function()
{
	var t = ["Elements"];
	var arr = this.toArray()
	for (var i = 0; i < arr.length; i++)
	{
		t.push(arr[i].name + "<br/>(" + arr[i].level.current + "/" + arr[i].level.maximum + ")");
	}

	return t;
};

Elements.prototype.toMenu = function(parent)
{
	var menu = new Menu(parent);

	var arr = this.toListArray();
	//arr[0] = "<div data-arraytoradialmenu='pet.soul.elements.toListArray()'></div>"
	for (var i = 0; i < arr.length; i++)
	{
		menu.NewOptionFromHTML(arr[i]);
	}

	return menu;
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

	this.sprite = "/images/elements/" + name + ".png";
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
