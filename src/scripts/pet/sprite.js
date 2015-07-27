function changePetSprite(spriteName)
{
	PIXI.loader
	.add(spriteName, "/images/" + spriteName + ".png")
	.add(spriteName + "_n", "/images/" + spriteName + "_n.png")
	.load(function(loader, resources)
	{
		pet.sprite = new PIXI.Sprite();
		pet.sprite.texture = resources[spriteName].texture;
		container.addChild(pet.sprite);

		pet.sprite.textureName = spriteName;
		pet.sprite.normalTexture = resources[spriteName + "_n"].texture;
		pet.sprite.pivot.x = pet.sprite.width / 2;
		pet.sprite.pivot.y = pet.sprite.height/ 2;
		pet.sprite.position = centerPoint;

		PIXI.loader.reset();
	});
};
