function Species()
{
	this.name = "";
};

CreateSpecies = function(o)
{
	var s = new Species();
	if (o.hasOwnProperty('Name'))
	{
		s.name = o.Name;
	}
	return s;
};

AddSpecies = function(a, b)
{
	var c = new Species();

	c.name = a.name + b.name;

	return c;
};
