class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = []
        let ans = Array.from(temperatures.length).fill(0)

        for(let i = temperatures.length - 1; i>=0; i--){
            while(stack.length && temperatures[stack.at(-1)] <= temperatures[i]){
                stack.pop()
            }
            if(stack.length){
                ans[i] = stack.at(-1) - i
            }
            else{
                ans[i] = 0
            }
            stack.push(i)
        } 
        return ans
    }
}
