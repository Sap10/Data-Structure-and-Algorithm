/**
 * Write a function that searches n element of an array and return the index, if the element is not present return -1
 * 
 * @param {Array} - An array with consists all numeric number
 * 
 * @param {number} - An numeric number which index we need to find on the provided array
 * 
 * return {number} - Index of the number within the provided array , if not found return -1
 * 
 */

function findTheIndex(arr, numb){
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] === numb) return i;
        //if ((i === arr.length - 1) && (arr[i] !== numb)) return -1;
    }
    return -1;
}

const array = [1, 3, 5, 78, 89, 9087, 223, 'test', 90];

// console.log(findTheIndex(array, 8));
// console.log(findTheIndex(array, 1));
// console.log(findTheIndex(array, -1));
// console.log(findTheIndex(array, 223));
// console.log(findTheIndex(array, 'test'));
// console.log(findTheIndex(array, 9087));

/**
 * Write a functionality that returns negative numbers in an array
 * 
 * @param arr {Array} - array of numbers
 * 
 * return {number}
 * 
 */

function countNegative(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            count++;
        }
    }
    return count;
}

let arr = [-1, 4, 5, -6, -98, 0, 78];

//console.log(countNegative(arr));

/**
 * Find the smallest number in an array
 * 
 * @param {array} - array of numbers
 * 
 * return {number}
 * 
 */

 function findSmallest(arr){
    let smallest;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== 'number') continue;
        if (!smallest || smallest > arr[i]){
            smallest = arr[i];
        }
    }
     return smallest;
 }

console.log(findSmallest(arr));


/**
 * Find the largest number in an array
 * 
 * @param {array} - array of numbers
 * 
 * return {number}
 * 
 */

function findLargest(arr) {
    let largest;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') continue;
        if (!largest || largest < arr[i]) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(findLargest(arr));


