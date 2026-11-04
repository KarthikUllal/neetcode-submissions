class Solution:
    def countSeniors(self, details: List[str]) -> int:
        count = 0
        for word in details:

            age = word[-4 : -2]

            if int(age) > 60:
                count +=1
        return count

        


        