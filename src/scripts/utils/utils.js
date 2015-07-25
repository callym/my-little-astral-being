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
