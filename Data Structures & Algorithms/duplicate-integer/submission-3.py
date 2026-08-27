class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:

        uniq = set()

        for num in nums:
            uniq.add(num)
        if len(uniq) != len(nums):
            return True
            
        return False
        