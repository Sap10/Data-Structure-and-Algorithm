/**
 * https://leetcode.com/problems/single-number/
 * 
 * @param {Array[] nums}
 * @return number
 * 
 */
//Solution : 1
function findSingleNumb(nums){
    let hashMap = {};
    for(let i = 0; i < nums.length; i++){
        if(!hashMap[nums[i]]){
            hashMap[nums[i]] = 1;
        }else{
            hashMap[nums[i]] ++;
        }
    }

    for(let i = 0; i < nums.length; i++){
        if(hashMap[nums[i]] < 2){
            return nums[i];
        }
    }
}

//console.log(findSingleNumb([2, 2, 1]));
//console.log(findSingleNumb([1]));
//console.log(findSingleNumb([4, 1, 2, 1, 2]));

//Solution : 2

//XOR gives 1 when the two values are different.
//XOR gives 0 when the two values are the same.

function findSingleNumb(nums){
    let xor = 0;
    for (let i = 0; i < nums.length; i++){
        xor = xor ^ nums[i];
    }
    return xor;
}

console.log(findSingleNumb([2, 2, 1]));
console.log(findSingleNumb([1]));
console.log(findSingleNumb([4, 1, 2, 1, 2]));