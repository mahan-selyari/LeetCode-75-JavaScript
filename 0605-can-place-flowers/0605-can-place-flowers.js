/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
let counter=0
    if(flowerbed.length>1){
        if (flowerbed[0]===0 && flowerbed[1]===0){
            flowerbed[0]=1
            counter++
}
         if (flowerbed[flowerbed.length-1]===0 && flowerbed[flowerbed.length-2]===0){
            counter++
            flowerbed[flowerbed.length-1]=1
    }}else if(flowerbed.length === 1 && flowerbed[0] === 0){
        counter++
    }
        for(let i = 1; i < flowerbed.length-1; i++){
            if (flowerbed[i]===0 && flowerbed[i-1]===0 && flowerbed[i+1]===0){
              counter++  
              flowerbed[i]=1
            }
    } 

    if (counter>=n){
        return true
    }else{
       return false
}
    

    };
