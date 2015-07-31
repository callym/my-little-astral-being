window.Menu = function(parent)
{
	this.parent = parent || null;

	this.evalString = null;
	this.string = null;

	this.options = [];
};

Menu.prototype.NewOptionFromHTML = function(html)
{
	var option = new Option(html, this);
	this.options.push(option);
	return option;
};

Menu.prototype.NewSubmenuFromHTML = function(html)
{
	var submenu = new Menu(this);
	this.options.push(submenu);
	return submenu;
};

Menu.prototype.NewSubmenu = function(string, evalString)
{
	var submenu = new Menu(this);
	submenu.string = string;
	submenu.evalString = evalString || null;
	this.options.push(submenu);
	return submenu;
};

Menu.prototype.toHTML = function()
{
	var d = document.createElement("div");

	var dAttributeValue = this.evalString;
	if (this.evalString == null)
	{
		d = document.createElement("div");

		var circle = document.createElement("div");
		circle.classList.add("circle");
		circle.classList.add("center");
		for (var i = 0; i < this.options.length; i++)
		{
			var o = this.options[i].toHTML();
			o[1].classList.add("item");
			o[1].onclick = function(e)
			{
				e.stopPropagation();
			};
			circle.appendChild(o[1]);
		}
		d.appendChild(circle);

		var link = document.createElement("a");
		link.classList.add("menu-button");
		link.innerHTML = this.string;
		link.onclick = function(e)
		{
			e.stopPropagation();
			circle.classList.toggle("open");
		};
		d.appendChild(link);

		dAttributeValue = "html";
	}
	else
	{
		d.innerHTML = this.string;
		if (this.parent != null)
		{
			d.setAttribute("data-submenu", true);
		}
	}
	d.setAttribute("data-arraytoradialmenu", dAttributeValue);

	return [dAttributeValue, d];
};

function Option(html, parent)
{
	this.parent = parent || null;

	this.html = html;
};

Option.prototype.toHTML = function()
{
	var d = document.createElement("div");
	d.innerHTML = this.html;
	return [null, d];
};
