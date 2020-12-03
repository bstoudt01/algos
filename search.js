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
    let start = 0
    //index of right pointer / array.length - 1
    let end = array.length - 1

    //round to down(floor) nearest whole number to get a middle index
    let middle = Math.floor((start + end) / 2)


    //condtionals if value is larger or smaller than ends of array or length is 0
    //return -1
    if (value < array[start] || value > array[end] || array.length === 0) return -1

    //loop while value is not equal to our middle pointer
    //and while starting pointer is less than end pointer
    while (array[middle] !== value && start <= end) {


        if (value < array[middle]) {
            //if value is smaller than array middle value, then move the end pointer down 1 into the array
            end = middle - 1
        }
        else {
            //if the valuer is larger than array middle value, then move the start pointer up 1 further into the array
            start = middle + 1
        }
        //reset middle based don new end or start
        middle = Math.floor((end + start) / 2)

    }

    //if value = index value return it
    if (array[middle] === value) {
        return middle
    }
    //value doesnt exist? return -1
    return -1;


    //    }
}
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 50))