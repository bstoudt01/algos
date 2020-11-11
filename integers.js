//7. Reverse Integer
//Given a 32-bit signed integer, reverse digits of an integer.
//..storage environment can only handle 32-bit ints
//remove trailing 0's and transpose negative signs when applicable
let number = -123;

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

console.log("reserve", number, "is now", reverse(number));

/****************************************************/
