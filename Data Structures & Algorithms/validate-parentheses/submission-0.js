class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack =  []
        let pairs = {
            "]" : "[",
            "}" : "{",
            ")" : "("
        }

        for(let i = 0; i<s.length; i++){
            if("{([".includes(s[i])){
                stack.push(s[i])
            }
            else{
                if(stack.length === 0) return false
                if(stack[stack.length - 1] !== pairs[s[i]]){
                    return false
                }
                stack.pop()
            }
                
            
        }
        return stack.length === 0
    }
}
