/**
 * Binary search can be applied into sorted array.
 * 
 * Process : 
 *  #1. Need to find middle index
 *  #2. Accroding to reduce the array.
 * 
 *  https://leetcode.com/problems/binary-search/
 * 
 * 
 * 
 */

function binarySearch(arr, target){
    let length = arr.length;
    let left = 0;
    let right = length - 1;
    
    while(left <= right){
        let middleElement = Math.floor((left + right) / 2);
        if(arr[middleElement] < target){
            left = middleElement + 1;
        }else if(arr[middleElement] === target){
            return middleElement;
        }else{
            right = middleElement - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1,3,6,8,10,12], 3));

// Time complexity : O(logn)
// Space complexity : O(1)