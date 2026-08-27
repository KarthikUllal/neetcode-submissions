from collections import Counter 
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        sFreq = Counter(s)

        tFreq = Counter(t)

    
        for key in sFreq:
            if sFreq[key] != tFreq[key]:
                return False
        
        return True