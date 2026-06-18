class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()
        let ans = []

        for(let num of nums){
            if(map.has(num)){
                map.set(num, map.get(num) + 1)
            }
            else{
                map.set(num, 1)
            }
        }

        let sorted = Array.from(map)
        sorted.sort((a,b) => b[1] - a[1])

        for(let i = 0; i<k; i++){
            ans.push(sorted[i][0])
        }
        return ans
    }
    
}
