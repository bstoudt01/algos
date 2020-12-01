//SEARCH 
//LINEAR SEARCH O(N)
//function accepts array and a value, checks every value in array until its found or all items have been checked
function linearSearch(array, value) {

    //loop throuth array , if the current array element is equal to the value
    for (let i = 0; i <= array.length; i++) {

        // if it is, return the index where its found
        if (value === array[i]) {
            return i;
        }
    }
    //if it is not found return -1
    return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5], 4))


//BINARY SEARCH
//accepts sorted array and a vale (numbers for now)
function binarySearch(array, value) {
    //index of left pointer / 0
    let left = 0
    //index of right pointer / array.length - 1
    let right = array.length - 1
    //loop
    for (let i = 0; i < array.length; i++) {
        //found element?
        //while left pointer comes before right pointer
        //index of middle value 
        //if value to small  left pointer up
        //value to to large, move right pointer down
    }
    //value doesnt exist? return -1
    return -1;


}