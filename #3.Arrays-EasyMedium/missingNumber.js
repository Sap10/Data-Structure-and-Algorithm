/**
 * https://leetcode.com/problems/missing-number/description/
 * 
 * @param {number[]} nums
 * @return {number}
 * 
 */

// function returnMissingNumbs(nums){
//     let isnumbExists;
//     for(let i = 0; i <= nums.length; i++){
//         isnumbExists = nums.includes(i);
//         if(!isnumbExists){
//             return i; 
//         }
//     } 
// }

//On the above function we used "includes" function, but we need to do this without using any inbuild function

//10:38

function returnMissingNumbs(nums) {
    let sum = (nums.length * (nums.length + 1)) / 2;
    let arraySum = 0;
    for (let i = 0; i < nums.length; i++){
        arraySum += nums[i];
    }
    return sum - arraySum;
}

//console.log(returnMissingNumbs([3, 0, 1]));
//console.log(returnMissingNumbs([0, 1]));
console.log(returnMissingNumbs([9, 6, 4, 2, 3, 5, 7, 0, 1]));