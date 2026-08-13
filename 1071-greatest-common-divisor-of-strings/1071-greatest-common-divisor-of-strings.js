/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let moshtarak=[]
    let no=""
   let firstArray=[]
    for(let i = 1;i<=str1.length;i++){
        if(str1.length % i==0){
            firstArray.push(i)
        }
    }
    for(let i = 1;i<=str2.length;i++){
        if(str2.length % i == 0 && firstArray.includes(i)){
            moshtarak.push(i)
        }
    }
let gcd = moshtarak[moshtarak.length-1]

    if(str1+str2===str2+str1){
      return str2.substring(0,gcd)
    }else{
        return no
    }};