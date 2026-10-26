/**
 * Return sum of all odd number within the array
 * 
 * @param {array[]} - Array
 * @param {number} - Array index
 * @returns {number} - sum of all odd numbers
 * 
 */

function sumAllOddNumbWithinArr(arr, ArrIndex){
    let isOdd = ((arr[ArrIndex] % 2) !== 0);
    if(ArrIndex === 0) return isOdd ? arr[0] : 0;
    if(!isOdd) return sumAllOddNumbWithinArr(arr, ArrIndex - 1);
    else return arr[ArrIndex] + sumAllOddNumbWithinArr(arr, ArrIndex - 1);
}

console.log(sumAllOddNumbWithinArr([5,2,4,3,6,1], 5));