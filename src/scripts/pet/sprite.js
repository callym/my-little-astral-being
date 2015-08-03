function changePetSprite(spriteName, spriteNormal)
{
	PIXI.loader
	.add(spriteName, "/images/" + spriteName + ".png")
	.add(spriteNormal, "/images/" + spriteNormal + ".png")
	.load(function(loader, resources)
	{
		pet.sprite = new PIXI.Sprite();
		pet.sprite.interactive = true;
		pet.sprite.texture = resources[spriteName].texture;
		container.addChild(pet.sprite);

		pet.sprite.textureName = spriteName;
		pet.sprite.normalTexture = resources[spriteNormal].texture;
		pet.sprite.pivot.x = pet.sprite.width / 2;
		pet.sprite.pivot.y = pet.sprite.height/ 2;
		pet.sprite.position.x = centerPoint.x;
		pet.sprite.position.y = (pet.sprite.height * 3) / 4;

		PIXI.loader.reset();
	});
};
