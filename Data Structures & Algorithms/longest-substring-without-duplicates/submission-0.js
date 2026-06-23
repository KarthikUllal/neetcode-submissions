class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let hash = new Map()
        let left = 0
        let len = 0

        for(let right = left; right < s.length; right++){
            hash.set(s[right], (hash.get(s[right]) || 0) + 1)

            while(hash.get(s[right])>1){
                hash.set(s[left], hash.get(s[left]) - 1)

                if(hash.get(s[left]) === 0){
                    hash.delete(s[left])
                }
                left ++
            }
            len = Math.max(len, right - left + 1)
        }
        return len
    }
}
