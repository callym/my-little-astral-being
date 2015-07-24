//=require soul.js
//=require body.js

function Pet(petName)
{
    this.name = petName;

    this.soul = new Soul();
    this.body = new Body();
};

pet = new Pet("");
