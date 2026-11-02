/**
 * Fibonacci number
 * https://leetcode.com/problems/fibonacci-number/
 * 
 *  f(n) = f(n-1) + f(n-2) //here n is the index
 * 
 * 
 *  This can be solve in 2 ways
 * 
 * #1. Iterative approach (top down approach)
 * #2. Recursive approach (bottom up approach)
 * 
 * @param {number} n
 * @returns {number} 
 */

function fibonacci(n){
    if(n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));