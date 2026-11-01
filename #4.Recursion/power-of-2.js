/**
 * https://leetcode.com/problems/power-of-two/description/
 * 
 * check any integer is power of 2 or not - isPowerOfTwo
 * 
 * @param {Number} - n
 * @returns {boolean}
 * 
 */

function isPowerOfTwo(n){
    if(n === 0) return false;
    if(n === 1) return true;
    if((n % 2) == 0){
        return isPowerOfTwo(n/2);
    }else{
        return false;
    }
}

//console.log(isPowerOfTwo(3));

//For a better optimization we can change our code like the following way:

function isPowerOfTwo2(n){
    if(n === 1) return true;
    else if((n % 2) !== 0 || (n < 1)) return false;

    return isPowerOfTwo2(n/2);
}

console.log(isPowerOfTwo2(8));