/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let height = 0;
    let max = 0;
    for(let i of gain){
        height += i;
        if(height > max){
            max = height;
        }
    }
    return max;
};