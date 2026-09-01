class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        maxLen = 0

        window = {}
        maxf = 0  
        left = 0

        for right in range(len(s)):
            
            window[s[right]] = window.get(s[right], 0) + 1
            maxf = max(maxf, window[s[right]])

            while (right - left + 1) - maxf > k:
                window[s[left]] -=1
                if window[s[left]] == 0:
                    del window[s[left]]
                left  +=1
        maxLen = max(maxLen, right - left + 1)

        return maxLen 
         