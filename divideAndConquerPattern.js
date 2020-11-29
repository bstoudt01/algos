//Divide And Conquer Pattern
// Log(N)
//divide data set into smaller pieces and look at the smaller pieces on where to go next

//EXAMPLE FOR UDEMY JAVASCRIPT ALGORITHMS AND DATASTRUCTURES MASTERCLASS SECTION 5:34
//Binary Search
//given sorted array of integers
//accepts an array of values and a single value and returns index of the array where that single value is found
//faster than linary when data is sorted.. common in complex situations
function search(array, val) {

    //beginning of array
    let min = 0;
    //end of array
    let max = array.length - 1;

    //pick a middle point and check if the value you are looking for is greater than or less than that value
    while (min <= max) {
        //find the middle of the array using Math.floor to return as integer
        let middle = Math.floor((min + max) / 2)

        //middle index of current array
        let currentElement = array[middle]

        //look at subarray and pick the middle point again and check if the value you need is greater than or less than the middle point
        if (array[middle] < val) {
            min = middle + 1
        }
        else if (array[middle] > val) {
            max = middle - 1
        }
        else {
            return middle
        }
    }
    return -1;

}

console.log(search([1, 2, 3, 6, 9], 9))