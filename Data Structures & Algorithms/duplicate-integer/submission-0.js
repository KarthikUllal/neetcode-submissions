class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashMap = new Map()

        for(let num of nums){
            if(hashMap.has(num)){
                return true
            }
            hashMap.set(num, 1)
        }
        return false
    }

}
