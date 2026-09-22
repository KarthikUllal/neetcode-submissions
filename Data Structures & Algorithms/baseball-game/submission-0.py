class Solution:
    def calPoints(self, operations: List[str]) -> int:

        stack = []

        for op in operations:

            if op == "C":
                stack.pop()

            elif op == "D":
                res = stack[-1] * 2
                stack.append(res)

            elif op == "+":
                res = stack[-1] + stack[-2]
                stack.append(res)

            else:
                stack.append(int(op))

        return sum(stack)