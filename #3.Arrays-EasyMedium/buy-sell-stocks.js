/**
 * buy & sells stocks : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 * 
 * @param {numbr[]} prices
 * @return {number}
 * 
 */

//We can't use the following O(n**2) approach as this will leads the memory limit exists.

// function maxProfit(prices){
//     let maxProfit = 0;
//     for(let i = 0; i < prices.length; i++){
//         for(let j = i; j < prices.length; j++){
//             if(maxProfit < (prices[j] - prices[i])){
//                 maxProfit = prices[j] - prices[i];
//             }
//         }
//     }
//     return maxProfit;
// }

function maxProfit(prices){
    let buyStockPrice = prices[0];
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++){
        if(maxProfit < (prices[i] - buyStockPrice)){
            maxProfit = prices[i] - buyStockPrice;
        }
        if(buyStockPrice > prices[i]){
            buyStockPrice = prices[i];
        }
    }
    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));