//=require pixi-lights.js

$(function()
{
	var dip 		= window.devicePixelRatio;
	var winWidth 	= window.innerWidth 	* dip;
	var winHeight 	= window.innerHeight 	* dip;

	var canvas = document.querySelector("#petcanvas");
	var appWidth 	= 1024;
	var appHeight 	= 1024;
	canvas.width = winWidth;
	canvas.height = winHeight;
	canvas.style.position = "absolute";

	renderer = new PIXI.lights.WebGLDeferredRenderer(
		appWidth,
		appHeight,
		{
			view: canvas
		});

	containerContainer = new PIXI.Container();
	container = new PIXI.Container();
	containerContainer.addChild(container);

	centerPoint = new PIXI.Point(appWidth / 2, appHeight / 2);

	var light = new PIXI.lights.PointLight(0xffffff, 1);

	var dirLight = new PIXI.lights.DirectionalLight(0xffffff, 0.5, centerPoint);
	dirLight.position.x = centerPoint.x;
	dirLight.position.y = 0;

	var dirLight2 = new PIXI.lights.DirectionalLight(0xffffff, 0.5, centerPoint);
	dirLight2.position.x = 0;
	dirLight2.position.y = centerPoint.y / 2;

	var dirLight3 = new PIXI.lights.DirectionalLight(0xffffff, 0.5, centerPoint);
	dirLight3.position.x = centerPoint.x * 2;
	dirLight3.position.y = centerPoint.y / 2;

	var ambientLight = new PIXI.lights.AmbientLight(0xffffff, 0.6);
	ambientLight.position.x = centerPoint.x;
	ambientLight.position.y = 0;

	container.addChild(light);
	container.addChild(dirLight);
	container.addChild(dirLight2);
	container.addChild(dirLight3);
	container.addChild(ambientLight);

	renderer.view.addEventListener('mousemove', function (e)
	{
		var rect = e.target.getBoundingClientRect();
		light.position.x = e.clientX - rect.left;
		light.position.y = e.clientY - rect.top;
	});

	animate();

	function animate()
	{
		requestAnimationFrame(animate);
		renderer.render(container);
	};

	window.getScale = function getScale()
	{
		return (renderer.width / appWidth);
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
});
