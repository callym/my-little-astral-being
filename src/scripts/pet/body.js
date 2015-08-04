//=require species.js

function Body(pet)
{
	this.pet = pet;

	this.species = this.NewSpecies();

	this.dust = new SettableInt(100, 0, "pet:body:dust:changed");
	this.dust.setCurrent(0);
};

Body.prototype.SubSpecies =
[
	/* [AIR, EARTH, FIRE, WATER, SPIRIT] */
	/* air */
	{Name: "Amethyst",		Elements: [10, 0, 0, 0, 0]},
	{Name: "Topaz", 		Elements: [10, 0, 0, 0, 0]},
	{Name: "Turquoise", 	Elements: [10, 0, 0, 0, 0]},

	/* earth */
	{Name: "Emerald", 		Elements: [0, 10, 0, 0, 0]},
	{Name: "Jade", 			Elements: [0, 10, 0, 0, 0]},
	{Name: "Obsidian", 		Elements: [0, 10, 0, 0, 0]},

	/* fire */
	{Name: "Citrine", 		Elements: [0, 0, 10, 0, 0]},
	{Name: "Ruby", 			Elements: [0, 0, 10, 0, 0]},
	{Name: "Sunstone", 		Elements: [0, 0, 10, 0, 0]},

	/* water */
	{Name: "Lapis Lazuli", 	Elements: [0, 0, 0, 10, 0]},
	{Name: "Pearl", 		Elements: [0, 0, 0, 10, 0]},
	{Name: "Sapphire", 		Elements: [0, 0, 0, 10, 0]},

	/* spirit */
	{Name: "Jet", 			Elements: [0, 0, 0, 0, 10]},
	{Name: "Diamond", 		Elements: [0, 0, 0, 0, 10]},
	{Name: "Quartz", 		Elements: [0, 0, 0, 0, 10]}
];

Body.prototype.Species =
[
	{Name: "cat"},
	{Name: "flower"}
];

Body.prototype.NewSpecies = function()
{
	var subSpecies = CreateSpecies(GetRandomFromArray(this.SubSpecies));
	var topSpecies = CreateSpecies(GetRandomFromArray(this.Species));

	return AddSpecies(subSpecies, topSpecies);
};
