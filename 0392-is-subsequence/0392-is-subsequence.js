/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sIndex = 0;
    for (let tIndex = 0; tIndex < t.length; tIndex++){
        if (s[sIndex] === t[tIndex]){
            sIndex++
        }
    }
        return sIndex === s.length

};