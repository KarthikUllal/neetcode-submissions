class Solution:
    def maxArea(self, heights: List[int]) -> int:
        left = 0
        right = len(heights) - 1
        maxWater = 0
        while left < right:

            minH = min (heights[left], heights[right])

            contain = (right - left) * minH

            if heights[left] < heights[right]:
                left +=1

            else:
                right -=1

            maxWater = max(maxWater, contain)
        return maxWater
        