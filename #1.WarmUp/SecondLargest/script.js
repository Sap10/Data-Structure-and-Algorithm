/**
 * Finds the second largest number in an array.
 * 
 * @param {number[]} numbs - The array of numbers.
 * @returns {number} The second largest number in an array.
 */

function findSecondLargestNumber(numbs){
    if(numbs.length < 2) return null;
    let largestNumb = -Infinity;
    let secondLargestNumb = -Infinity;
    for(let i = 0; i < numbs.length; i++){
        if(typeof numbs[i] !== 'number') continue;
        if(largestNumb < numbs[i]){
            secondLargestNumb = largestNumb;
            largestNumb = numbs[i];
        } else if ((secondLargestNumb < numbs[i]) && (numbs[i] !== largestNumb)) {
                secondLargestNumb = numbs[i];
        }
    }
    return secondLargestNumb;
}

let arr = [4, 9, 0, 2, 8, 7, 1];

console.log(findSecondLargestNumber(arr));