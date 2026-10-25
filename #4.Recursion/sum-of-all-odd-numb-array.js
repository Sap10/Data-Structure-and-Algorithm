/**
 * Return sum of all odd number within the array
 * 
 * @param {array[]} - Array
 * @param {number} - Array index
 * @returns {number} - sum of all odd numbers
 * 
 */

function sumAllOddNumbWithinArr(arr, ArrIndex){
    if(ArrIndex === 0) return arr[0];
    if((arr[ArrIndex] % 2) === 0) return sumAllOddNumbWithinArr(arr, ArrIndex - 1);
    return arr[ArrIndex] + sumAllOddNumbWithinArr(arr, ArrIndex - 1);
}

console.log(sumAllOddNumbWithinArr([5,2,4,3,6,1], 5));