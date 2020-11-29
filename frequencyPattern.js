//given two strings , write a function that determines if the 2nd string is an anagram of the first
//anagram - rearrange the letters of one string to form the other string
function validAnagram(stringOne, stringTwo) {
    // add whatever parameters you deem necessary - good luck!
    //freqency counter object 1 for chars in stringOne

    if (stringOne.length !== stringTwo.length) {
        return false;
    }
    //frequency counter object for characters in stringOne, characters are keys, count of characters are the value
    let frequencyCounter = {};

    for (let i = 0; i < stringOne.length; i++) {
        let char = stringOne[i];
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1
        //        frequencyCounter[char] ? frequencyCounter[char] += 1 : frequencyCounter[char] = 1;
    }
    console.log(frequencyCounter);

    //for loop to for each char in stringTwo place in object, update frequency++ for duplicates
    for (let i = 0; i < stringTwo.length; i++) {

        //get character from string
        let char = stringTwo[i];
        //if character does not exist as key in object
        if (!frequencyCounter[char]) {
            return false;

            //else character does exist as key in object, remove "1" from the value of that key
        } else {
            frequencyCounter[char] -= 1;
        }

    }


    return true;

}

console.log(validAnagram("az", "zza"));
//validAnagram("aaz", "zaa")
