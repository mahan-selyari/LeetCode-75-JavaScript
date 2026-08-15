/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
let count=0
    if(flowerbed.length>1){
        if (flowerbed[0]===0 && flowerbed[1]===0){
            flowerbed[0]=1
            count++
}
         if (flowerbed[flowerbed.length-1]===0 && flowerbed[flowerbed.length-2]===0){
            count++
            flowerbed[flowerbed.length-1]=1
    }}else if(flowerbed.length === 1 && flowerbed[0] === 0){
        count++
    }
        for(let i = 1; i < flowerbed.length-1; i++){
            if (flowerbed[i]===0 && flowerbed[i-1]===0 && flowerbed[i+1]===0){
              count++  
              flowerbed[i]=1
            }
    } 

    if (count>=n){
        return true
    }else{
       return false
}
    

    };
