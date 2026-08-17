/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [];
    let counter = 1;
for(let i = 0; i < nums.length; i++){
 result[i] = counter;
 counter *= nums[i];
}
counter = 1;
for(let i = nums.length - 1; i >= 0; i--){
 result[i] *= counter;
 counter *= nums[i];
}
    return result;
};