//Count Unique Values in array
//SORT IN PLACE / ARRAY ALTERED
function countUniqueValues(array) {

    //sorted array, count unique values in the array (in place / altering sorted array)
    //start a pointer at index 0 and 1
    let i = 0
    let j = 1
    //for (let j = 1; j <= array.length; j++)
    while (j <= array.length) {
        //compare , if i and j are different... move i forward  as a counter and then move j forward for the next comparison
        if (array[i] !== array[j]) {
            //increment i to increase count
            i++
            //set index[i] to the value from index[j], this adds the unique value to the to the palce in the array where i is sitting
            // we are reading the length of i to get a count of unique values, so moving j to the location of i will place a unique value in that place, moving the unique values to the beginning of the list
            array[i] = array[j]
        }
        //else if value of i and j are equal to each other increment j...
        //move j ahead to look at the next value
        else {
            j++
        }
    }
    //return i BUT you need to adjust count returned because zero index
    return i++;

}
/*Alternate answer to countUniqueValues from Sisi*/
// const countUniqueValues = (arr) => {
//     if (arr.length === 0) return 0;
//     //set the left pointer equal to 0 to start from the beginning;
//     let leftPointer = 0;
//     //loop through the array with j acting as the right pointer starting at the index after the leftPointer
//     for (let j = 1; j <= arr.length; j++) {
//         //if the value at the left pointer does not match the value at the right pointer...
//         if (arr[leftPointer] !== arr[j]) {
//             //increment the left pointer
//             leftPointer++
//             //allow the value of the left pointer to now equal the value at the right
//             //reassign the left pointer to be what j is looking at
//             arr[leftPointer] = arr[j]
//         }

//     }
//     //adjust return for zero index
//     return leftPointer++
// }

console.log(countUniqueValues([1, 1, 2, 3]))




//EXAMPLE FOR UDEMY JAVASCRIPT ALGORITHMS AND DATASTRUCTURES MASTERCLASS SECTION 5:30
//find first pair where sum is equal to 0 ...from a sorted array
//return that pair in an array
function sumZero(arr) {

    //two pointers that start at the beginning and end of the array
    let left = 0;
    let right = arr.length - 1;

    //loop as long as we have not already seen that number
    while (left < right) {

        //find sum of value of array index left and array index right
        let sum = arr[left] + arr[right];

        //if sum equals zero, return values in array
        if (sum === 0) {
            return arr[left], arr[right];

            //else if sum  is larger than 0 / no match ... move right index 1 down from the end (right side)
        } else if (sum > 0) {
            right--;

            // else if sum is less than 0, move left index up 1 from the leftside
        } else {
            left++;
        }
    }



}