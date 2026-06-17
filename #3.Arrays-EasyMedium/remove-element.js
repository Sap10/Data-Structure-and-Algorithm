/**
 * Problem : https://leetcode.com/problems/remove-element/
 * 
 * @params {array[]} -nums
 * @return number
 * 
 */



function removeElement(nums, val){
    for(let i = 0; i < nums.length;){
        if(nums[i] === val){
            nums.splice(i,1);
            i--; //recommend to not use this algo
        }else{
            i++; //recommend to not use this algo
        }
    }
    return nums.length;
}

function rmoveElement2(nums, val){
    let uniqueElementPointer = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[uniqueElementPointer] = nums[i];
            uniqueElementPointer += 1;
        }
    }
    return uniqueElementPointer;
}

console.log(rmoveElement2([1,2,2,3,4,4,4,5], 4));