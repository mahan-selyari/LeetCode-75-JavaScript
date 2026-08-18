/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = [nums.length - 1];
    let counter = 0;
    while(left < right){
        let sum = nums[left] + nums[right];
        if(sum === k){
            counter++;
            left++;
            right--;
        }else if(sum > k){
            right--;
        }else{
            left++
        }
    }
    return counter;
};