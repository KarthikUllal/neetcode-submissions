class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let hash = new Map()

        for(let num of nums){
            hash.set(num, (hash.get(num) || 0) + 1)

            if(hash.get(num) > nums.length / 2){
                return num
            }
        }
        

    }
}
