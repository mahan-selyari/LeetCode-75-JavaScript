/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    let left = 0;
    let right = 1;
    while(i < nums.length){
        if (nums[left] === 0){
            if(right < nums.length && nums[right] !== 0){
                [nums[left], nums[right]] = [nums[right], nums[left]]
                left++;
                right++;
            }else{
                right++;
            }
        }else{
            left++
            right++
        }       i++;
    }
};