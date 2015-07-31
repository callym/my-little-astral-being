function GetRandomFromArray(arr)
{
    return arr[Math.floor(Math.random() * arr.length)];
};

function RandomInt(max, min)
{
	min = min || 0;

	return Math.floor(Math.random() * (max - min + 1) + min);
};

function Shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function EqualArrays(arr1, arr2)
{
    if (typeof arr1 == "undefined" || typeof arr2 == "undefined")
    {
        return false;
    }

    if (arr1.length != arr2.length)
    {
        return false;
    }

    for (var i = 0; i < arr1.length; i++)
    {
        if (typeof arr1[i] == "undefined" || typeof arr2[i] == "undefined")
        {
            return false;
        }
        if (arr1[i].constructor == Array && arr2[i].constructor == Array)
        {
            var subarray = EqualArrays(arr1[i], arr2[i]);
            if (subarray == false)
            {
                return false;
            }
        }
        else if (arr1[i] != arr2[i])
        {
            return false;
        }
    }
    return true;
}

$.fn.getRealDimensions = function (outer) {
    var $this = $(this);
    if ($this.length == 0) {
        return false;
    }
    var $clone = $this.clone()
        .show()
        .css('visibility','hidden')
        .insertAfter($this);
    var result = {
        width:      (outer) ? $clone.outerWidth() : $clone.innerWidth(),
        height:     (outer) ? $clone.outerHeight() : $clone.innerHeight(),
        offsetTop:  $clone.offset().top,
        offsetLeft: $clone.offset().left
    };
    $clone.remove();
    return result;
}
