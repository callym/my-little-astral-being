//=require pixi.js
//=require pixi-extra-filters.js
//=require pixi-lights.js

$(function()
{
	var dip 		= window.devicePixelRatio;
	var winWidth 	= window.innerWidth 	* dip;
	var winHeight 	= window.innerHeight 	* dip;

	var canvas = document.querySelector("#petcanvas");
	var appWidth 	= 1000;
	var appHeight 	= 1000;
	canvas.width = winWidth;
	canvas.height = winHeight;
	canvas.style.position = "absolute";

	renderer = new PIXI.lights.WebGLDeferredRenderer(
		appWidth,
		appHeight,
		{
			view: canvas,
			//transparent: true,
			//antialias: true
		});

	containerContainer = new PIXI.Container();
	container = new PIXI.Container();
	containerContainer.addChild(container);

	centerPoint = new PIXI.Point(appWidth / 2, appHeight / 2);

	var light = new PIXI.lights.PointLight(0xffffff, 1);
	var dirLight = new PIXI.lights.DirectionalLight(0xffffff, 0.5, centerPoint);
	dirLight.position.x = 250;
	dirLight.position.y = 0;

	container.addChild(light);
	container.addChild(dirLight);
	container.addChild(new PIXI.lights.AmbientLight(0xffffff, 0.4));

	renderer.view.addEventListener('mousemove', function (e) {
		var rect = e.target.getBoundingClientRect();
		light.position.x = e.clientX - rect.left;
		light.position.y = e.clientY - rect.top;
	});
	renderer.view.addEventListener('click', function (e) {
		var s = (pet.sprite.textureName == "diamond") ? "egg" : "diamond";
		changePetSprite(s);
	});

	animate();

	function animate()
	{
		requestAnimationFrame(animate);
		renderer.render(container);
	};

	// The re-size method
	// Calculates the correct ratio and scales scaler
	function resize()
	{
		var wW = window.innerWidth 	* dip;
		var wH = window.innerHeight * dip;
		var newWidth 	= wW;
		var newHeight 	= wH;
		var widthToHeight 		= appWidth / appHeight;
		var newWidthToHeight 	= newWidth / newHeight;

		if (newWidthToHeight > widthToHeight)
		{
			newWidth = newHeight * widthToHeight;
		}
		else
		{
			newHeight = newWidth / widthToHeight;
		}

		// Make sure it's centered on the screen
		renderer.resize(newWidth, newHeight);
		canvas.style.left 	= (wW - newWidth)	/2 + 'px';
		canvas.style.top 	= (wH - newHeight)	/2 + 'px';
	}

	// Hook re-size event
	window.addEventListener('resize', resize, false);
	resize();

	changePetSprite("egg");
});
