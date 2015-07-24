function SettableInt(min, max)
{
    var minimum = min;
    var maximum = max;

    var current = max;

    var setCurrent = function(setTo)
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

    var changeCurrent = function(changeTo)
    {
        var newCurrent = this.current + changeTo;
        setCurrent(newCurrent);
    }

    var setMaximum = function(setTo)
    {
        if (setTo <= this.minimum)
        {
            setTo = this.minimum + 1;
        }

        this.maximum = setTo;

        if (this.current > this.maximum)
        {
            this.current = this.maximum;
        }
    }

    var changeMaximum = function(changeTo)
    {
        var newMax = this.maximum + changeTo;
        setMaximum(newMax);
    }

    var setMinimum = function(setTo)
    {
        if (setTo >= this.maximum)
        {
            setTo = this.maximum - 1;
        }

        this.minimum = setTo;

        if (this.current < this.minimum)
        {
            this.current = this.minimum;
        }
    }

    var changeMinimum = function(changeTo)
    {
        var newMin = this.minimum + changeTo;
        setMinimum(newMin);
    }
};
