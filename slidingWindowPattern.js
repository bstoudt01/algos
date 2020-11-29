//keeping track of a subset of data in a larger data

//EXAMPLE FOR UDEMY JAVASCRIPT ALGORITHMS AND DATASTRUCTURES MASTERCLASS SECTION 5:33

//function that accepts an array of integers and a number (N) and returns the largest sum produced by Nth consecutive integers
function maxSubArraySum(array, num) {
    let maxSum = 0;
    let tempSum = 0;

    //edge case if number is greater than length of array 
    if (num > array.length) {
        return null;
    }

    //loop through array nth number of times to set first sum  "max sum"
    for (let i = 0; i < num; i++) {

        //add values indexes 0-3 (number of indexes equal to num) and save them as max
        maxSum += array[i];
    }

    //set tempSum to hold the maxSum while we look at other values to find the maxSum
    tempSum = maxSum;

    //loop through array to get next temp sum
    for (let i = num; i < array.length; i++) {
        //add indees 1-4 and save them as temp
        //remove value of first index from tempSum and add the next index value to tempSum (remove index 1 replace with index 4)
        tempSum = tempSum - array[i - num] + array[i]
        //if temp is greater than max, reassign max to equal temp
        //take the variable that has the maxiumum value (using Math.max) and set it to maxSum
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2))