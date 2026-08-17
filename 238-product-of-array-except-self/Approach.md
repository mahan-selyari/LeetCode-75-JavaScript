# 📝 My Approach & Learning Journey

This problem took me about **[time]** to solve. The main challenge was not the multiplication itself, but recognizing how to reduce my first `O(n²)` solution to the required `O(n)` solution without using division.

### 1. Initial Approach: Nested Loops

My first idea was straightforward: for every index `i`, traverse the entire array again with `j` and multiply every element except `nums[i]`.

```javascript
var productExceptSelf = function(nums) {
    let result = [];
    let counter = 1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                counter *= nums[j];
            }
        }

        result.push(counter);
        counter = 1;
    }

    return result;
};
```

The logic was correct, but the two loops are nested. The outer loop runs `n` times and the inner loop also runs `n` times:

```text
n × n = n²
```

So the time complexity is **O(n²)**, which does not satisfy the problem's `O(n)` requirement.

### 2. Challenges & Lessons: Thinking in Prefix and Suffix Products

I realized that I was repeatedly calculating products that I had already calculated before.

For each index, the answer can be divided into two parts:

```text
product of elements on the left × product of elements on the right
```

For:

```text
[1, 2, 3, 4]
```

The left products are:

```text
[1, 1, 2, 6]
```

And the right products are:

```text
[24, 12, 4, 1]
```

Multiplying the corresponding values gives:

```text
[24, 12, 8, 6]
```

This taught me the importance of **reusing previously calculated information instead of recalculating it**.

### 3. Second Approach: Two Auxiliary Arrays

I first implemented this idea using two arrays: one for the left products and one for the right products.

```javascript
var productExceptSelf = function(nums) {
    let result = [];
    let resultl = [];
    let resultr = [];
    let counter = 1;

    for (let i = 0; i < nums.length; i++) {
        resultl[i] = counter;
        counter *= nums[i];
    }

    counter = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        resultr[i] = counter;
        counter *= nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        result[i] = resultl[i] * resultr[i];
    }

    return result;
};
```

This approach is already **O(n)** in time because the loops are sequential, not nested:

```text
O(n) + O(n) + O(n) = O(n)
```

However, it uses two additional arrays, so its auxiliary space complexity is **O(n)**.

### 4. Final Approach: Reusing the Result Array

I then realized that the left-product array did not need to exist separately. I could store the left products directly in `result`.

First pass — left to right:

```javascript
for (let i = 0; i < nums.length; i++) {
    result[i] = counter;
    counter *= nums[i];
}
```

For `[1, 2, 3, 4]`, this produces:

```text
[1, 1, 2, 6]
```

Then I reset `counter` and traverse from right to left. At this point, `counter` represents the product of all elements to the right of the current index.

```javascript
for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= counter;
    counter *= nums[i];
}
```

Final solution:

```javascript
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

### 5. Further Learning: Nested Loops & Big-O

This problem helped me understand an important Big-O rule:

**Nested loops multiply their complexity.**

```javascript
for (...) {
    for (...) {
        // O(1)
    }
}
```

If both loops run `n` times:

```text
n × n = O(n²)
```

But sequential loops add their complexity:

```javascript
for (...) {
    // O(n)
}

for (...) {
    // O(n)
}
```

This is:

```text
O(n) + O(n) = O(2n) = O(n)
```

So having multiple loops does **not** automatically mean `O(n²)`. What matters is whether they are nested.

I also learned that three sequential loops are still `O(n)`:

```text
n + n + n = 3n = O(n)
```

while three nested loops would be:

```text
n × n × n = O(n³)
```

### ⏱️ Complexity Analysis

**Initial nested-loop approach:**
- **Time Complexity:** `O(n²)`
- **Auxiliary Space:** `O(1)` excluding the output array

**Two-array approach:**
- **Time Complexity:** `O(n)`
- **Auxiliary Space:** `O(n)`

**Final optimized approach:**
- **Time Complexity:** `O(n)`
- **Auxiliary Space:** `O(1)` excluding the required output array
- **Division:** Not used

The final solution makes two linear passes:

```text
O(n) + O(n) = O(n)
```

The output array itself requires `O(n)` space, but it is not counted as auxiliary space because it is the required return value.

### 💡 Key Takeaway

This problem taught me how to recognize and eliminate repeated work. My first solution directly followed the problem statement but used a nested loop, giving `O(n²)`. By thinking in terms of **prefix and suffix products**, I was able to reuse previous calculations and reach the required `O(n)` solution without division.

The biggest lesson for me was:

> **Don't recalculate information you already have. Find a way to carry previous results forward and reuse them.**
