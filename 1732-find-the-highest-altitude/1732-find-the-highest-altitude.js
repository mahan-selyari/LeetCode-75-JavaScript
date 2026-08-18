/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let currentAltitudeht = 0;
    let highestAltitude = 0;
    for(let i of gain){
        currentAltitudeht += i;
        if(currentAltitudeht > highestAltitude){
            highestAltitude = currentAltitudeht;
        }
    }
    return highestAltitude;
};