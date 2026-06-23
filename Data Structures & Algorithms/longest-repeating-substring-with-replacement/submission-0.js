class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0
        let len = 0
        let maxF = 0
        let count = new Map()

        for(let r = 0; r < s.length; r++ ){
            count.set(s[r], (count.get(s[r]) ||  0) + 1)

            maxF = Math.max(count.get(s[r]), maxF )

            while((r - l + 1) - maxF > k){
                count.set(s[l], count.get(s[l]) - 1)
                l++
            }
            len = Math.max(len, r - l + 1)
        }
        return len
    }
}
