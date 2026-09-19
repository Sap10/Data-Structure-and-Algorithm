/**
 * https://leetcode.com/problems/reverse-integer/
 * 
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2**31, 2**31 - 1], 
 * then return 0.
 * 
 * @param {Number} - x
 * @returns {Number}
 * 
 */

function returnReverseInt(x){
    let isNegative = false;
    if (x < 0){
        isNegative = true;
        x = Math.abs(x);
    }
    let reverseNumber = 0;
    while(x > 0){
        let remainder = x % 10;
        reverseNumber = reverseNumber * 10 + remainder;
        x = parseInt(x / 10);
    }
    reverseNumber = isNegative ? -reverseNumber : reverseNumber;
    if ((reverseNumber < -(2 ** 31)) || (reverseNumber > ((2 ** 31) - 1))) return 0;
    return reverseNumber;
}

console.log(returnReverseInt(1534236469));