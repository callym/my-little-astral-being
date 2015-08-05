$.ui.dialog.prototype._title = function(title)
{
	title.html(this.options.title);
};

var easing = "easeInCubic";
var duration = 1000;
$.extend($.ui.dialog.prototype.options,
{
	autoOpen: false,
	dialogClass: "no-close hide",
	modal: true,
	resizable: false,
	draggable: false,
	minWidth: 450,
	width: $(window).width() * 0.4,
	beforeClose: function()
	{
		$('.ui-widget-overlay:first')
			.clone()
			.appendTo('body')
			.show()
			.fadeOut(duration * 2, easing, function()
			{
				$(this).remove();
			});
	},
	hide: { effect: "fade", duration: duration, easing: easing },
	show: { effect: "fade", duration: duration, easing: easing },
	open: function()
	{
		/*
			this is all a rather ugly hack that allows my OnDOMChange functions
			to run on buttons (jQuery buttons don't seem to trigger it)

			so it moves all buttons in the <div class="buttons"> div on the
			dialog box into the proper button container in the dialog box
			(for styling reasons really)
		*/
		var $dialog = $(this);
		$(this).parent().promise().done(function()
		{
			var $t = $(this);
			var $buttonpane;
			var $oldbuttonpane = $t.find(".buttons");
			var $buttons = $t.find("button");
			$t.find("#default").each(function()
			{
				$buttonpane = $(this.parentElement);
				$(this).remove();
			});
			$t.find("button").each(function()
			{
				$button = $(this);
				$button.appendTo($buttonpane);
				$button.button();
				if ($button.hasClass("close"))
				{
					$button.click(function()
					{
						$dialog.dialog("close");
					});
				}
			});
			$oldbuttonpane.remove();
			$t.animate({ opacity: 1 }, 500, function()
			{
				$t.removeClass("hide");
			});
		});
	},
	/*
		the button container divs only exist if there is a button defined here...
	*/
	buttons:
	[{
		text: "OK",
		id: "default"
	}]
});
