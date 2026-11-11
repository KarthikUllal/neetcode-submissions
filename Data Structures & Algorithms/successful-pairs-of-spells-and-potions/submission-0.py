class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
        res = []
        potions.sort()


        for s in spells:

            l , r = 0, len(potions)


            while l < r:

                mid = (l + r) // 2


                if s * potions[mid] >= success:

                    r = mid 

                else:
                    l = mid + 1

            res.append(len(potions) - l)
        return res