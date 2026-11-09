/**
 * Linear search generally iterates through array and find it's target element.
 * 
 * @param {number} numb
 * @returns {number}
 */

function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target) return arr[i];
    }
    return -1;
}

console.log(linearSearch([2,4,7,9,80], 4));

console.log(linearSearch([2,4,7,9,80], 14));