/**
 * Move zeros : https://leetcode.com/problems/move-zeroes/
 */

//my first solution

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
            while (indexOfZeroElement < i){
                indexOfZeroElement++;
                if (nums[indexOfZeroElement] == 0) break;
            }
        }
    }
    console.log(nums);
}

//moveZeros([4, 2, 4, 0, 0, 3, 0, 5, 1, 0]);

//more optimize simple solution

function moveZeros2(nums){
    let replacementIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[replacementIndex] = nums[i];
            replacementIndex++;
        }
    }
    for(let i = replacementIndex; i < nums.length; i++){
       nums[i] = 0; 
    }
    console.log(nums);
}

moveZeros2([4, 2, 4, 0, 0, 3, 0, 5, 1, 0]);

//17:11