/**
 * Sum of all number in array
 * 
 * @param {Array} - array
 * @returns {void}
 * 
 */

function sumOfAllNumb(array, index = 0){
    if(array.length <= index) return 0;
    return array[index] + sumOfAllNumb(array, index + 1);
}

/**
 * We can iterate array by recursion, with following base case and recursive case.
 * 
 *      base case :  if(arrIndex > (array.length - 1)) return 0;
 * 
 *      recursive case :  return 
 * 
 * 22-10-2026 : For the above recursive case I am unable to write the recursive case as in the 'first n number of sum' we have seen the recursive case was : return sum + sumFirstN(n - 1) , where n was parameter. Here in array what should be the parameter ? this is the main 'obstacle' here.
 * 
 * 23-10-2026 : Seems like that if we use 2 parameter array and index, then we may achive this functionality.
 * 
 * 24-10-2026 : Actually we can write better logic that to set the parameter as an array length, which is comperatively better approach than set index as parameter
 * 
 */

console.log(sumOfAllNumb([1, 2, 3, 4, 5]));