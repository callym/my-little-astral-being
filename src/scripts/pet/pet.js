//=require sprite.js
//=require soul.js
//=require body.js

function Pet(petName)
{
    this.name = petName;

    this.soul = new Soul(this);
    this.body = new Body(this);

    this.soul.elements.setMaximumFromArray(this.body.species.elements);

    this.menu = new Menu();
    this.menu.NewOptionFromHTML("BLAH");
    this.menu.NewSubmenu("Elements", "pet.soul.elements.toListArray()");
};

pet = new Pet("");
