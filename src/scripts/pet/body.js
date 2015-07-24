//=require species.js

function Body()
{
	this.species = this.NewSpecies();

	this.energy = new SettableInt(0, 10);
};

Body.prototype.SubSpecies =
[
	{Name: ""},
	{Name: "mer"},
	{Name: "were"},
	{Name: "cyber"}
];

Body.prototype.Species =
[
	{Name: "cat"}
];

Body.prototype.NewSpecies = function()
{
	var chance = 0.5;
	var rand = Math.random();

	var subSpecies = CreateSpecies(this.SubSpecies[0]); /* empty sub-species */
	if (rand > chance)
	{
		subSpecies = CreateSpecies(GetRandomFromArray(this.SubSpecies));
	}
	var topSpecies = CreateSpecies(GetRandomFromArray(this.Species));

	return AddSpecies(subSpecies, topSpecies);
};
