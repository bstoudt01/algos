



//26. Remove Duplicates from Sorted Array and return the length
let numbers = [1, 1, 2]
const originalNumbers = numbers.length;

var removeDuplicates = function (nums) {
    //starting with the first index in the array
    for (let i = 0; i < nums.length; i++) {

        //check if the value of that index is equivelant to the value of the neighboring index
        while (nums[i + 1] == nums[i]) {

            //while that is true, remove the index from which the comparison started
            nums.splice(i, 1)
        }

        //after while loop closes, the for loop runs again as i++
    }
};
removeDuplicates(numbers);
console.log("removeDuplicates original length", originalNumbers, "new length", numbers.length)

/****************************************************/




