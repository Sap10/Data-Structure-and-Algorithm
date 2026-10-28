/**
 * Create a factorial function
 * 
 * @param {Number} - n
 * @returns {Number}
 * 
 */

function factorial(n){
    if(n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(4));