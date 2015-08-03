//=require utils/**/*.js
//=require pet/pet.js
//=require pixi/pixi-req.js


$(document).ready(function()
{
	runOnDOMChangeArray = [];
	setInvervalsArray = [];
	setIntervals = function(arr)
	{
		if ($.inArray(arr[0], setInvervalsArray) == -1);
		{
			setInvervalsArray.push(arr);
		}
	}
	window.runSetIntervals = function()
	{
		for (var i = 0; i < setInvervalsArray.length; i++)
		{
			setInvervalsArray[i][0]();
		}
	};
	setInterval(runSetIntervals, 1000);

	window.runSetIntervalsLong = function()
	{
		for (var i = 0; i < runOnDOMChangeArray.length; i++)
		{
			runOnDOMChangeArray[i]();
		}
	};
	setInterval(runSetIntervalsLong, 1000);

	runOnDOMChange = function(func)
	{
		if ($.inArray(func, runOnDOMChangeArray) == -1);
		{
			runOnDOMChangeArray.push(func);
			func();
		}
	}

	registeredEvents = [];
	function registerEvent(arr, f)
	{
		for (var i = 0; i < arr.length; i++)
		{
			var curUpdate = arr[i];
			var cID = GetXPath(curUpdate);
			var e = null;

			f(curUpdate, i);

			if (typeof curUpdate.dataset.event != "undefined")
			{
				e = curUpdate.dataset.event;

				var saveArray = [cID, e];

				var equal = false;
				for (var j = 0; j < registeredEvents.length; j++)
				{
					if (cID == registeredEvents[j][0] && e == registeredEvents[j][1])
					{
						equal = true;
						break;
					}
				}
				if (equal)
				{
					continue;
				}

				registeredEvents.push(saveArray);

				runEvent(f, e, curUpdate, i);
			}
		}
	};
	function runEvent(func, ev, el, i)
	{
		$(document).on(ev, function()
		{
			func(el, i);
		});
	};

	//=require ui/**/*.js

	$("body").fadeIn(1000, function()
	{
		$("body").removeClass("hideOpacity");
	});
});
