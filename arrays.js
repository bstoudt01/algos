//26. Remove Duplicates from Sorted Array and return the length
numbers = [1, 1, 2]
var removeDuplicates = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        while (nums[i + 1] == nums[i]) {
            nums.splice(i, 1)
        }
    }
};
const answer = removeDuplicates(numbers);
console.log("winner", numbers.length)

