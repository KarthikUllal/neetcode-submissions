class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length
        let ans = []

        for(let i = 0; i < 2 * n; i++){
            let index = i % n
            ans.push(nums[index])
        }
        return ans
    }
}
