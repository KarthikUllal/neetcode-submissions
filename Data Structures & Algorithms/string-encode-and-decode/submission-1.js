class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for(let word of strs){
            res += word.length + "#" + word
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = []
        let i = 0

        while(i < str.length){

            let j = i

            while(str[j] != "#"){
                j ++
            }
            let len = parseInt(str.substring(i, j))

            let word = str.substring(j + 1, j + 1+len)

            decoded.push(word)
              i = j + 1 + len
        }
      

        return decoded
    }
}


