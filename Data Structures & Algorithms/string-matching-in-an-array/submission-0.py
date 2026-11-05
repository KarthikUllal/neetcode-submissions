class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        sub = []

        for word in words:

            for other in words:

                if word == other:
                    continue

                if word in other:
                    sub.append(word)
                    break

        return sub