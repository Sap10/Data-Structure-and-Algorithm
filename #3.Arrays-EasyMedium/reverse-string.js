/**
 * Reverse String (https://leetcode.com/problems/reverse-string/description/)
 * 
 * @params {Array[] s}
 * @return Array[]
 */

function reverseString(s){
    let lastElemenetPointer = s.length - 1;
    let prsentElement = null;
    for(let i = 0; i < parseInt(s.length / 2); i++){
        prsentElement = s[i];
        s[i] = s[lastElemenetPointer];
        s[lastElemenetPointer] = prsentElement;
        lastElemenetPointer -= 1;
    }
    return s;
}

console.log(reverseString([1,2,2,3,4,4,5]));