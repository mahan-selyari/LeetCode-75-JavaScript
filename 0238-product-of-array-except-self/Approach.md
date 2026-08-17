# 📝 My Approach & Learning Journey

This problem took me about **40 minutes** to solve. The main challenge was finding a solution that satisfies the required `O(n)` time complexity without using division.

### 1. Initial Approach: Nested Loops

My first solution used two nested loops. For every index `i`, I traversed the whole array again and multiplied every element except `nums[i]`.

The idea was:

```text
for each element
    multiply all other elements
```

This solution works, but it takes `O(n²)` time because the inner loop runs for every element of the array.

### 2. Understanding the Complexity Problem

The problem requires `O(n)` time, so the nested-loop approach is not acceptable.

I also reviewed how nested loops affect complexity:

- One loop over `n` elements → `O(n)`
- Two nested loops over `n` elements → `O(n²)`
- Three nested loops over `n` elements → `O(n³)`

This helped me recognize that I needed to avoid recalculating the same products repeatedly.

### 3. Second Approach: Prefix and Suffix Products

I realized that the product needed for each position can be divided conceptually into two parts:

```text
product of everything to the left
×
product of everything to the right
```

So I first built the product of all elements before each index from left to right.

Then I traversed from right to left and multiplied each position by the product of all elements after it.

This gives the required result without using division.

### 4. Improvement: Removing Extra Arrays

My first `O(n)` idea used separate arrays for the left and right products.

That works, but it uses additional `O(n)` space besides the output array.

Then I realized that the `result` array itself can store the left products first, and during the second traversal it can be multiplied by the right product.

This removes the need for separate `left` and `right` arrays.

### 5. Final Approach

The final solution uses only the output array and one variable, `counter`.

During the first traversal:

```text
result[i] = product of all elements before i
```

During the second traversal:

```text
result[i] *= product of all elements after i
```

For example:

```text
nums = [1, 2, 3, 4]
```

After the left-to-right pass:

```text
result = [1, 1, 2, 6]
```

After the right-to-left pass:

```text
result = [24, 12, 8, 6]
```

The final implementation is:

```js
var productExceptSelf = function(nums) {
    let result = [];
    let counter = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = counter;
        counter *= nums[i];
    }

    counter = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= counter;
        counter *= nums[i];
    }

    return result;
};
```

### 6. Complexity Analysis

The array is traversed twice, but both traversals are linear and sequential.

Therefore:

```text
Time Complexity: O(n)
```

The output array is required by the problem and does not count as extra space. Apart from it, only `counter` is used:

```text
Extra Space Complexity: O(1)
```

### 7. What I Learned

This problem taught me several important concepts:

- Nested loops can quickly increase time complexity to `O(n²)` or `O(n³)`.
- Recalculating the same work is often the main reason a solution is too slow.
- Prefix and suffix information can be combined to avoid division.
- Two linear passes are still `O(n)` overall.
- The output array can sometimes be reused as working storage when the problem allows it.
- A solution can be improved from `O(n²)` to `O(n)` and then from `O(n)` extra space to `O(1)` extra space.

### 💡 Key Takeaway

The biggest lesson from this problem was:

> **Instead of repeatedly calculating the product for every position, store reusable prefix information and combine it with suffix information in a second pass.**

This turns a repeated `O(n²)` calculation into an `O(n)` solution while using only constant extra space besides the output array.
