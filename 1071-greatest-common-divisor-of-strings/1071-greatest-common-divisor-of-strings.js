/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let divisors=[]
   let commonDivisors=[]
    for(let i = 1;i<=str1.length;i++){
        if(str1.length % i==0){
            divisors.push(i)
        }
    }
    for(let i = 1;i<=str2.length;i++){
        if(str2.length % i == 0 && divisors.includes(i)){
            commonDivisors.push(i)
        }
    }
let gcd = commonDivisors[commonDivisors.length-1]

    if(str1+str2===str2+str1){
      return str2.substring(0,gcd)
    }else{
        return ""
    }};