# 📝 My Approach & Learning Journey

I solved this problem in about **20 minutes**. While the logic was relatively straightforward, it provided a great opportunity to revisit how JavaScript handles arrays and mathematical operations.

### 1. Initial Approach
The goal was to determine if each kid could have the maximum number of candies if given all the extra candies. My implementation follows a clear two-step process:

1. **Finding the Maximum:** I first traversed the `candies` array to identify the current maximum number of candies any kid has.
2. **Comparison:** I then looped through the array again, adding `extraCandies` to each kid's current amount and comparing it to `maxCandies`.
3. **Result:** If the new sum was greater than or equal to the maximum, I pushed `true` to the result array; otherwise, `false`.

### 2. Challenges & Lessons
Initially, I tried to find the maximum value using:
`let maxCandies = Math.max(candies);`

**The Problem:** I ran into a bug because `Math.max()` expects individual numeric arguments rather than an array. Passing the array directly results in `NaN`.

**The Fix:** I implemented a manual `for` loop to find the maximum value, which worked correctly and kept the logic clear.

### 3. Final Approach
After successfully submitting, I explored other solutions and discovered a more concise way to find the maximum using the **Spread Operator**:

```javascript
let maxCandies = Math.max(...candies);
```

The spread operator (`...`) expands the array into individual elements, allowing `Math.max()` to process them correctly.

### ⏱️ Complexity Analysis
- **Time Complexity:** `O(n)` — The array is traversed a constant number of times.
- **Space Complexity:** `O(n)` — The returned boolean result array contains one element for each input element. Excluding the output array, the auxiliary space is `O(1)`.

### 💡 Key Takeaway
This problem reminded me that even "Easy" tasks have hidden lessons. I'm glad I encountered the `Math.max()` bug because it led me to learn about the Spread Operator, which will make my future JavaScript code more concise and elegant.
