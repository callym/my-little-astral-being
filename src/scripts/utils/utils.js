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
