class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length - 1 

        let i = 0
        let maxArea = 0
        let j = n

        while(i<j){
            let minH = Math.min(heights[i], heights[j])

            let width = j - i

            let area = minH * width

            maxArea = Math.max(maxArea, area)

            if(heights[i] < heights[j] ){
                i++
            }
            else{
                j--
            }
        }
        return maxArea 
    }
}
