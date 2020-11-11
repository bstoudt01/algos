//7. Reverse Integer
//Given a 32-bit signed integer, reverse digits of an integer.
//..storage environment can only handle 32-bit ints
//remove trailing 0's and transpose negative signs when applicable
let numberSeven = -123;

var reverse = function (x) {

    //change to string, split it into single elements and place into an array
    //reverse the array elements, and then join them back together
    //lastly parse that recently joined string back into an int
    let y = parseInt(x.toString().split("").reverse().join(""))

    //if the transposed number is greater than 32-bit int (1.4 billion, 10 chars) and is now an overflow value , return 0
    if (y > 0x7fffffff) {
        return 0
    }

    //take the result "y" and multily it by a positive 1, negative 1, or 0 to match the inital value type  
    return y * Math.sign(x)
};

console.log("reserve", numberSeven, "is now", reverse(numberSeven));

/****************************************************/


//9. Palindrome Number
//Determine whether an integer is a palindrome. 
//..An integer is a palindrome when it reads the same backward as forward.
//Follow up: Could you solve it without converting the integer to a string?

const numberNine = 13231

var isPalindrome = function (x) {

    //hold onto the original number as it will be manipulated
    let originalX = x

    var digit, result = 0

    // if the number is zero ,return true / palindrome
    if (Math.sign(x) == 0) {
        return true
    }

    // if the number is a negative, return false / not a palindrome
    if (Math.sign(x) == -1) {
        return false
    }

    //
    while (x) {

        //  Get right-most digit. Ex. 123/10 → 12.3 → 3
        digit = x % 10

        //  set digit into result as the tail end of the number being created 
        //...Ex. 123 → 1230 + 4 → 1234
        result = (result * 10) + digit

        // using OR expression to remove the trailing remainder  
        //  Remove right-most digit. Ex. 123 → 12.3 → 12
        x = x / 10 | 0
        //x= Math.round(x/10|0) // This also seems to work but Math.round is not truly needed

        if (result == originalX) {
            return true
        }
    }

    return false
};
console.log("is", numberNine, "a palindrome?", isPalindrome(numberNine));

/****************************************************/
