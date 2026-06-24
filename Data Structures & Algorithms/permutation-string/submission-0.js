class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if(s1.length > s2.length) return false

        let s1Freq = new Map()
        let windowFreq = new Map()

        for(let ch of s1){
            s1Freq.set(ch, (s1Freq.get(ch) || 0) + 1)
        }

        let l = 0

        for(let r = 0; r < s2.length; r++){

            windowFreq.set(s2[r], (windowFreq.get(s2[r]) || 0) + 1)

            if(r - l + 1 > s1.length){
                windowFreq.set(s2[l], windowFreq.get(s2[l]) - 1)

                if(windowFreq.get(s2[l]) === 0) {
                    windowFreq.delete(s2[l])
                }
                l++
            }

            if(isSame(s1Freq, windowFreq)){
                return true
            }
        }
        return false
        
    }
}
function isSame(map1, map2){
    if(map1.size !== map2.size) return false

    for(let [key, value] of map1){
        if(map2.get(key) !== value) return false
    }
    return true
}
