function SettableInt(max, min)
{
    this.minimum = min || 0;
    this.maximum = max;

    this.current = max;
};

SettableInt.prototype.setCurrent = function(setTo)
{
    if (setTo > this.maximum)
    {
        setTo = this.maximum;
    }
    if (setTo < this.minimum)
    {
        setTo = this.minimum;
    }
    this.current = setTo;
}

SettableInt.prototype.changeCurrent = function(changeTo)
{
    var newCurrent = this.current + changeTo;
    this.setCurrent(newCurrent);
}

SettableInt.prototype.setMaximum = function(setTo)
{
    if (setTo < this.minimum)
    {
        setTo = this.minimum;
    }

    this.maximum = setTo;

    if (this.current > this.maximum)
    {
        this.current = this.maximum;
    }
}

SettableInt.prototype.changeMaximum = function(changeTo)
{
    var newMax = this.maximum + changeTo;
    this.setMaximum(newMax);
}

SettableInt.prototype.setMinimum = function(setTo)
{
    if (setTo > this.maximum)
    {
        setTo = this.maximum;
    }

    this.minimum = setTo;

    if (this.current < this.minimum)
    {
        this.current = this.minimum;
    }
}

SettableInt.prototype.changeMinimum = function(changeTo)
{
    var newMin = this.minimum + changeTo;
    this.setMinimum(newMin);
}
