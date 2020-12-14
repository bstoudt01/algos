//HELPER Function
//Get the value of a digit in an integer 
//Pass through a number and the index of the interger you would like to check, 
function getDigit(num, place) {
    //get the value  of the "place" by taking the 10th power to express if its a single, teen, hundred, thousand, ten-thousosand.. so on
    //make sure the number is a positive number / int by using Math.absolute value
    // divide the positive number over the "place value" (single, teen's, hundreds, etc..)
    //round down , so if the division reutrns a 3.3 or 3.8 is always rounds down to 3 and we are always looking at a sequential step
    //return the retuslt after remove the power operation  "% 10" now that the number has been evatuated, retrunning 3 instead of 300, etc..
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

//HELPER Function
//return the highest digit count that occures in a list of numbers
//utilized digitCount function
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
        return maxDigits
    }
}

//HELPER Function
//digitCount(num) - returns the number of digits in num
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

//Radix Sort
//sorting without comparison
//radixSort - accepts a list of integers
function radixSort(nums) {

    //get the largest number of digits in any of the numbers
    let maxDigitCount = mostDigits(nums);

    //loop through the list x time based on the maxDigit Counted
    for (let k = 0; k <= maxDigitCount; k++) {

        //create buckets (arrays) to store digits in based on a single digit
        //each bucket is an array, create arrays named 0-9
        //Array.from //Array constructor that creates iterations based on array.length set to 10, so with zero index that arrays 0-9
        let digitBuckets = Array.from({ length: 10 }, () => []);

        //for each number, the single-digit found in that digit location (k), take that entire number and place it in the corresponding bucket for that single digit
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        //after each number in the array has been audited for a value at that digit and those numbesr have been added to the approprate bucket
        //the list of nums is redefined with a concantination of the buckets, pulling from buckets 0-9 and bottom to top inside those buckets
        nums = [].concat(...digitBuckets);
        console.log(nums);
    }
    //after the list is looped through x times based on maxDigit Counted, return the last definition of the numbers list
    return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))