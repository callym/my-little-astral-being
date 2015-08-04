function SettableInt(max, min, events)
{
    this.minimum = min || 0;
    this.maximum = max;

    this.current = max;
    this.events = events || false;
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

    if (this.events != false)
    {
        TriggerEvents(this.events);
    }
};

SettableInt.prototype.changeCurrent = function(changeTo)
{
    var newCurrent = this.current + changeTo;
    this.setCurrent(newCurrent);

    if (this.events != false)
    {
        TriggerEvents(this.events);
    }
};

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

    if (this.events != false)
    {
        TriggerEvents(this.events);
    }
};

SettableInt.prototype.changeMaximum = function(changeTo)
{
    var newMax = this.maximum + changeTo;
    this.setMaximum(newMax);

    if (this.events != false)
    {
        TriggerEvents(this.events);
    }
};

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

    if (this.events != false)
    {
        TriggerEvents(this.events);
    }
};

SettableInt.prototype.changeMinimum = function(changeTo)
{
    var newMin = this.minimum + changeTo;
    this.setMinimum(newMin);

    if (this.events != false)
    {
        TriggerEvents(this.events);
    }
};
