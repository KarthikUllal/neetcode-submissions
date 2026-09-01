from collections import Counter
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:

        s1F = Counter(s1)

        window = Counter()

        if len(s1) > len(s2):
            return False


        left = 0

        for right in range(len(s2)):

            window[s2[right]] +=1

            if right - left + 1 > len(s1):
                window[s2[left]] -= 1
                if window[s2[left]] == 0:
                    del window[s2[left]] 
                left +=1
            if window == s1F:
                return True
        return False

            

        

        




        