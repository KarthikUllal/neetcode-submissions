class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        squares = []

        for i in range(len(nums)):
 
            sqr = nums[i] * nums[i]
            squares.append(sqr)
        squares.sort()

        return squares
        