/**
 * https://leetcode.com/problems/max-consecutive-ones/description/
 */

var findMaxConsecutiveOnes = function (nums) {
    let consecutiveMax = 0;
    let consecutiveCount = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            consecutiveCount++;
        }else{
            if (consecutiveMax < consecutiveCount) consecutiveMax = consecutiveCount;
            consecutiveCount = 0;
        }
    }
    if (consecutiveCount !== 0 && consecutiveCount > consecutiveMax) consecutiveMax = consecutiveCount;
    return consecutiveMax;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));