/**
 * Remove Duplicates from Sorted Array
 * 
 * @param [Array] - nums
 * @returns {number}
 */

function removeDuplicateNumbs(nums){
    if(nums.length < 1 || nums.length > (3 * (10**4))) return 'Give a valid array input';
    let uniqueNumb = null;
    count = 0;
    for(let i = 0; i < nums.length; i++){
        if (nums[i] < -100 || nums[i] > 100) return 'Give a valid array input';
        if(!nums){
            uniqueNumb = i;
            count++;
            continue;
        }else{
            if (nums[uniqueNumb] === nums[i]){
                nums.splice(i, 1, "_");
            }else{
                uniqueNumb = i;
                count++;
            }
        }
    }
    return count;
}

console.log(removeDuplicateNumbs([1, 1, 2]));