for (var i = 0; i < document.styleSheets.length; i++)
{
	ss = document.styleSheets[i];
	var tags = ["color", "border-top", "background", "background-color"];
	var petColour = ElementColours[pet.soul.highestElement.name].html;
	var petColourDark = tinycolor(petColour).darken(20).toHexString();

	for (var j = 0; j < ss.cssRules.length; j++)
	{
		rules = ss.cssRules[j];
		if (typeof rules == "undefined")
		{
			continue;
		}
		if (typeof rules.style == "undefined")
		{
			continue;
		}
		if (typeof rules.style.cssText != "undefined")
		{
			if (rules.style.cssText.indexOf("lime") > -1)
			{
				rules.style.cssText = rules.style.cssText.replace("lime", petColour);
			}
			if (rules.style.cssText.indexOf("blue") > -1)
			{
				rules.style.cssText = rules.style.cssText.replace("blue", petColourDark);
			}
		}
	}
}
