//=require species.js

function Body(pet)
{
	this.pet = pet;

	this.species = this.NewSpecies();

	this.dust = new SettableInt(100, 0, "pet:body:dust:change");
	this.dust.setCurrent(0);

	this.polish = function()
	{
		this.dust.changeCurrent(-RandomInt(15, 5));
	};

	$(document).on("pet:body:dust:change", function()
	{
		if (pet.body.dust.current == 100)
		{
			pet.death(pet.name + " relies on light to survive, however you let them get so dusty that they starved.");
			TriggerEvents("pet:death:bad");
		}
	});
};

Body.prototype.SubSpecies =
[
	/* [AIR, EARTH, FIRE, WATER, SPIRIT] */
	/* air  							A  E  F  W  S */
	{Name: "amethyst",		Elements: [7, 0, 0, 0, 3]},
	{Name: "topaz", 		Elements: [10, 0, 0, 0, 0]},
	{Name: "turquoise", 	Elements: [8, 0, 0, 2, 0]},
	/* earth 							A  E  F  W  S */
	{Name: "emerald", 		Elements: [0, 10, 0, 0, 0]},
	{Name: "jade", 			Elements: [2, 8, 0, 0, 0]},
	{Name: "obsidian", 		Elements: [0, 7, 3, 0, 0]},
	/* fire  							A  E  F  W  S */
	{Name: "citrine", 		Elements: [0, 0, 7, 0, 3]},
	{Name: "ruby", 			Elements: [0, 0, 10, 0, 0]},
	{Name: "sunstone", 		Elements: [2, 0, 8, 0, 0]},
	/* water  							A  E  F  W  S */
	{Name: "lapis lazuli", 	Elements: [0, 0, 0, 7, 3]},
	{Name: "pearl", 		Elements: [0, 0, 0, 10, 0]},
	{Name: "sapphire", 		Elements: [0, 2, 0, 8, 0]},
	/* spirit  							A  E  F  W  S */
	{Name: "jet", 			Elements: [0, 0, 8, 0, 2]},
	{Name: "diamond", 		Elements: [0, 0, 0, 0, 10]},
	{Name: "quartz", 		Elements: [3, 0, 0, 0, 7]}
	/*	 								A  E  F  W  S */
];

Body.prototype.Species =
[
	{Name: "cat"},
	{Name: "flower"}
];

Body.prototype.NewSpecies = function()
{
	var subSpecies = CreateSpecies(GetRandomFromArray(this.SubSpecies));
	//var topSpecies = CreateSpecies(GetRandomFromArray(this.Species));

	//return AddSpecies(subSpecies, topSpecies);
	return subSpecies;
};
