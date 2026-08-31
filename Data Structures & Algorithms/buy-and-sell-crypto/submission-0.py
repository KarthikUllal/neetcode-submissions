class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minPrice = float('inf')
        maxProfit = float('-inf')

        for price in prices:

            minPrice = min(minPrice, price)

            profit = price - minPrice

            maxProfit = max(maxProfit,profit)
        return maxProfit