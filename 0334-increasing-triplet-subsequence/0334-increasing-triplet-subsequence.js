/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
let first = Infinity;
let second = Infinity;
let flag = 0;
for(let i = 0; i < nums.length; i++){
    if (nums[i] < first && nums[i] < second){
        first = nums[i];
    }else if(nums[i] > first && nums[i] < second){
        second = nums[i];
    }if(nums[i] > second){
        flag = 1;
        break;
    }
}
if (flag){
    return true;
}else{
    return false;
}
};