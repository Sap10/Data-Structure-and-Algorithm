/**
 * Write a function that returns the count of digits in a number.
 * 
 * @param {number} -numb
 * @returns {number} 
 * 
 */

function countDigit(numb){
    if(typeof numb !== 'number') return 'Please provide a number.';
    if(numb === 0) return 1;
    let count = 0;
    while(numb % 10 !== 0){
        numb = parseInt(numb / 10);
        count++;
    }
    if(numb % 10 === 0) return count;
}

console.log(countDigit(55555));