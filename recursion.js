

//RECURSIVE POWER OF NUMBER
// find the power of a base number and exponent
function power(exponent, base) {

    if (exponent === 1) return base * 1;

    if (base === 0) return 1;

    base = base * base

    return power(exponent - 1, base)
}
console.log(power(2, 0))



//RECURSIBE FACTORIAL FUNCTION
function factorial(num) {
    //edge case to end recursion for negative numbers
    if (num < 0) return 0;
    // breakpoint for number of 1
    if (num <= 1) return 1;

    //take num and mulitply it by the numbe below it , and so on until we reach 1; then return that number x1;
    return num * factorial(num - 1)
}
console.log(factorial(-4)) // 24



//RECURSIVE PRODUCT OF ARRAY
//function that takes an array of numbers and returns the product of those numbers
let product = 1;
function productOfArray(array) {

    //when array is empty return the prouduct OR 1
    if (array.length === 0) return product;

    //if number at hand is 0, return 0 for the product
    if (array[0] === 0) return 0;

    //return the first number, and remove the next number from the array until there are no more and times those together in poping off the stack
    //return =  first number in the array X the next number in the array until there are no more 
    return array[0] * productOfArray(array.slice(1))
}
console.log(productOfArray([1, 2, 3, -6]))


//RECURSIVE RANGE
//function that accepts a number and adds up all the numbers from 0 to the number passed through the function
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
function recursiveRange(number) {

    //return when number is 0
    if (number === 0) return number;

    //return the number + the number before it until you hit 0
    return number + recursiveRange(number - 1);

}

console.log(recursiveRange(6));


//RECURSIVE FIBONACCi SEQUENCE
function fib(n) {

    //return 1 when you hit the first 2 numbers in the fibonacci sequence
    if (n <= 2) return 1;

    //while n is greater than equal to 2 add N-1 and N-2 and then go back through those stacks and add those returns together
    //...finally returning once the stack trace is back to the original call
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(3))
