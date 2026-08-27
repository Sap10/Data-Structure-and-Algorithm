/**
 * https://leetcode.com/problems/missing-number/description/
 * 
 * @param {number[]} nums
 * @return {numbr}
 * 
 */

function returnMissingNumbs(nums){
    let isnumbExists;
    for(let i = 0; i < nums.length; i++){
        isnumbExists = nums.includes(nums[i]);
        if(!isnumbExists){
            console.log('test');
            console.log(nums[i]);
            return nums[i]; 
        }
    } 
}

console.log(returnMissingNumbs([3, 0, 1]));