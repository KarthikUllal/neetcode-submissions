class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0
        for(let j = 0; j < nums.length; j++){
            if(nums[j] !== val){
                nums[k] = nums[j]
                k++
            }
            
        }
        return k

    }
}
