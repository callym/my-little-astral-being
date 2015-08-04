$.ui.dialog.prototype._title = function(title)
{
	title.html(this.options.title);
};

var easing = "easeInCubic";
var duration = 1000;
$.extend($.ui.dialog.prototype.options,
{
	dialogClass: "no-close",
	modal: true,
	resizable: false,
	draggable: false,
	minWidth: 350,
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
	show: { effect: "fade", duration: duration, easing: easing }
});
