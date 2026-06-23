class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minCost = Infinity
        let profit = 0

        for(let price of prices){
            let currentProfit = 0

            minCost = Math.min(minCost, price)

            currentProfit = price - minCost

            profit = Math.max(profit, currentProfit)
        }
        return profit?profit : 0

    }
}
