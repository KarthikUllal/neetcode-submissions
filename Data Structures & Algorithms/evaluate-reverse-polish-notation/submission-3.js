class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        let res = 0
        for(let ele of tokens){
            if("+-*/".includes(ele)){
                let op2 = stack.pop()
                let op1 = stack.pop()
             
                if(ele == "+"){
                    res = op1 + op2
                }
                else if(ele == "-"){
                    res = op1 - op2
                }
                else if(ele == "*"){
                    res = op1 * op2
                }
                else{
                    res = Math.trunc(op1 / op2)
                }
                stack.push(res)

            }
            else{
                stack.push(Number(ele))
            }
            
        }
        return stack[stack.length - 1]
    }
}
