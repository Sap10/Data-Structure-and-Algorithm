/**
 * 
 * It is name bubble sort as if we sort the array assending order, then it will bubbled up the largest number at the end of the array. As same if we sort the array in decending order then it bubbled up the smallest number at the end of the array.
 * 
 * In bubble short iteration is happening like the following :
 *
 *      If we short it assending order :
 *
 *
 *  1st iteration : (n-1) times get the heighest number at last position.
 *  2nd iteration : (n-2) times get the 2nd heighest number at 2nd last position.
 *  3rd iteration : (n - 3) times get the 3rd heighest number at 3rd last position.
 *  .
 *  .
 *  .
 *  .
 *  .
 *  nth iteration : 1 times get smellest number at 1st position.
 *
 * 
 *  time complexity : O(n^2)
 * 
 *  space complexity : O(1)
 * 
 *  Improvement scope : If there is no swapping happening in any iteration, then we assume the array is sort.
 * 
 */

let arr = [3, 2, 9, 5, 1];

function bubbleSort(arr){
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        let isSwapped = false;
        for(let j = 0; j < n - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
}

bubbleSort(arr);

console.log(arr);

