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

//For a better optimize code can change our code like the following way: