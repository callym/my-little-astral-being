//=require utils/**/*.js
//=require pet/pet.js


$(document).ready(function()
{
	var runOnDOMChange = [];
	var setInvervalsArray = [];
	setIntervals = function(arr)
	{
		if ($.inArray(arr[0], setInvervalsArray) == -1);
		{
			setInvervalsArray.push(arr);
			setInterval(arr[0], arr[1]);
		}
	}

	var observer = new window.MutationObserver(function(mutations, observer)
	{
		for (var i = 0; i < runOnDOMChange.length; i++)
		{
			runOnDOMChange[i]();
		}
	});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
	observer.observe(document,
	{
		subtree: true,
		attributes: true
	});
//=require ui/**/*.js
});
