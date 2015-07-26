//=require utils/**/*.js
//=require pet/pet.js


$(document).ready(function()
{
	runOnDOMChangeArray = [];
	setInvervalsArray = [];
	setIntervals = function(arr)
	{
		if ($.inArray(arr[0], setInvervalsArray) == -1);
		{
			setInvervalsArray.push(arr);
			setInterval(arr[0], arr[1]);
		}
	}

	runOnDOMChange = function(func)
	{
		if ($.inArray(func, runOnDOMChangeArray) == -1);
		{
			runOnDOMChangeArray.push(func);
			func();
		}
	}

	observer = new window.MutationObserver(function(mutations, observer)
	{
		for (var i = 0; i < runOnDOMChangeArray.length; i++)
		{
			//runOnDOMChangeArray[i]();
		}
	});

	observer.observe(document,
	{
		subtree: true,
		attributes: true
	});

	//=require ui/**/*.js

	$("body").fadeIn(1000, function()
	{
		$("body").removeClass("hideOpacity");
	});
});
