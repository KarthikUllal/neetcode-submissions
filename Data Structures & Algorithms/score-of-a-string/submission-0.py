class Solution:
    def scoreOfString(self, s: str) -> int:
        total = 0
        for ch in range(len(s) - 1):
            val = ord(s[ch + 1]) - ord(s[ch])

            total += abs(val)
        return total
            


        