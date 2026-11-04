class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        maxCount = 0
        count = 0

        for r in range(len(nums)):

            if nums[r] == 1:
                count +=1

            else:
                count = 0
            maxCount = max(count, maxCount)
        return maxCount