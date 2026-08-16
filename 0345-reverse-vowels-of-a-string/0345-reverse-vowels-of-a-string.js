/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let sArray = [...s];
    let result = [];
    let index = [];
    for(let i = 0; i < sArray.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(sArray[i] === vowels[j]){
                result.push(sArray[i]);
                index.push(i);
            }
        }
    }
    result.reverse();
    for(let i = 0; i < result.length; i++){
        sArray[index[i]]=result[i];
    }
    return sArray.join("");
};