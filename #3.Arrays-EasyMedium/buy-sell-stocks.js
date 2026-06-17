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
    let buyStockIndex = null;
    let sellStockIndex = null;
    if(prices.length <= 1) return 0;
    for(let i = 0; i < prices.length; i++){
        if(buyStockIndex == null) {
            buyStockIndex = i;
        }else if ((prices[i] < prices[buyStockIndex]) && (i < sellStockIndex)){
            buyStockIndex = i;
        }

        if(sellStockIndex == null) {
            sellStockIndex = i;
        }else if((prices[i] > prices[sellStockIndex]) && (i > buyStockIndex)){
            sellStockIndex = i;
        }
        console.log(sellStockIndex, buyStockIndex);
    }

    return (prices[sellStockIndex] - prices[buyStockIndex]) < 0 ? 0 : prices[sellStockIndex] - prices[buyStockIndex];
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));