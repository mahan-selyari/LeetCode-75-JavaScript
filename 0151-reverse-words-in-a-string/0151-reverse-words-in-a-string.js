/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = s.trim().split(" ").filter(s=>s!=="").reverse().join(" ");
    
    return result
};