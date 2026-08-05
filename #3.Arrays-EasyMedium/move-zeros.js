/**
 * Move zeros : https://leetcode.com/problems/move-zeroes/
 */

function moveZeros(nums){
    if (nums.lngth <= 1) return;
    let indexOfZeroElement = null;
    for(let i = 0; i < nums.length; i++){
        if (nums[i] == 0){
            if(indexOfZeroElement == null){
                indexOfZeroElement = i;
            }
        }else{
            if(indexOfZeroElement == null) continue;
            nums[indexOfZeroElement] = nums[i];
            nums[i] = 0;
            // if(nums[i - 1] == 0){
            //     indexOfZeroElement = i - 1;
            // }else{
            //     indexOfZeroElement = i;
            // }
            while (indexOfZeroElement < i){
                indexOfZeroElement++;
                if (nums[indexOfZeroElement] == 0) break;
            }
        }
    }
    console.log(nums);
}

moveZeros([4, 2, 4, 0, 0, 3, 0, 5, 1, 0]);


//17:11