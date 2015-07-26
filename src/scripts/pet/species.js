function Species()
{
	this.name = "";

	this.elements = [];
};

CreateSpecies = function(o)
{
	var s = new Species();
	if (o.hasOwnProperty('Name'))
	{
		s.name = o.Name;
	}

	if (o.hasOwnProperty('Elements'))
	{
		s.elements = o.Elements;
	}
	return s;
};

AddSpecies = function(a, b)
{
	var c = new Species();

	c.name = a.name + " " + b.name;

	for (var i = 0; i < a.elements.length; i++)
	{
		if (isNaN(a.elements[i]))
		{
			c.elements[i] = b.elements[i];
		}
		else if (isNaN(b.elements[i]))
		{
			c.elements[i] = a.elements[i];
		}
		else
		{
			c.elements[i] = a.elements[i] + b.elements[i];
		}
	}

	return c;
};
