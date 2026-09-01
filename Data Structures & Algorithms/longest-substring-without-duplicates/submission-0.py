class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        maxLen = 0

        left = 0
        window = {}
        for right in range(len(s)):
            window[s[right]] = window.get(s[right], 0) + 1

            while window[s[right]] > 1 :
                window[s[left]] -=1
            
                if window[s[left]] == 0:
                    del window[s[left]]
                left +=1
            maxLen = max(maxLen, right - left + 1)
        return maxLen



        