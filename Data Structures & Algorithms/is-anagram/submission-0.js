class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sHash = new Map()
        let tHash = new Map()

        for(let ch of s){
            if(sHash.has(ch)){
                sHash.set(ch, (sHash.get(ch) || 0) + 1)
            }
            else{
                sHash.set(ch, 1)
            }
        }
        for(let ch of t){
            if(tHash.has(ch)){
               tHash.set(ch, (tHash.get(ch) || 0) + 1)
            }
            else{
                tHash.set(ch, 1)
            }
        }

        if(sHash.size !== tHash.size){
            return false
        }
        for(let [ch, count ] of sHash){
            if(!tHash.has(ch)){
                return false 
            }
            if(tHash.get(ch) !== count){
                return false
            }
        }

        return true
    }
}
