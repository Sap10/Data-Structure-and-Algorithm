/**
 * Remove Duplicates from Sorted Array
 * 
 * @param [Array] - nums
 * @returns {number}
 */

// function removeDuplicateNumbs(nums){
//     if(nums.length < 1 || nums.length > (3 * (10**4))) return 'Give a valid array input';
//     let uniqueNumb = null;
//     count = 0;
//     for(let i = 0; i < nums.length; i++){
//         if (nums[i] < -100 || nums[i] > 100) return 'Give a valid array input';
//         if(!nums){
//             uniqueNumb = i;
//             count++;
//             continue;
//         }else{
//             if (nums[uniqueNumb] === nums[i]){
//                 nums.splice(i, 1, "_");
//             }else{
//                 uniqueNumb = i;
//                 count++;
//             }
//         }
//     }
//     return count;
// }

function removeDuplicateNumbs(nums){
    if (nums.length < 1 || nums.length > (3 * (10 ** 4))) return 'Give a valid array input';
    let uniquenumbIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if (nums[i] < -100 || nums[i] > 100) return 'Give a valid array input';
        if(nums[i] > nums[i - 1]){
           nums[uniquenumbIndex + 1] = nums[i];
           uniquenumbIndex = uniquenumbIndex + 1;
        }
    }
    return uniquenumbIndex + 1;
}

console.log(removeDuplicateNumbs([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));