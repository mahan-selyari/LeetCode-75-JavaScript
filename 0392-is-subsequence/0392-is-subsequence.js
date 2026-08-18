/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sLeft = 0;
    for (let i = 0; i < t.length; i++){
        if (s[sLeft] === t[i]){
            sLeft++
        }
    }
    if(sLeft === s.length){
        return true;
    }else{
        return false;
    }
};