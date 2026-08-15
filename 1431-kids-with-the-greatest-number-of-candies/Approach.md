# 📝 Process & Reflection: Kids With the Greatest Number of Candies

I solved this problem in about **20 minutes**. While the logic was relatively straightforward, it provided a great opportunity to revisit how JavaScript handles arrays and mathematical operations.

### 💡 My Approach: Two-Pass Logic
The goal was to determine if each kid could have the maximum number of candies if given all the extra candies. My implementation follows a clear two-step process:

1. **Finding the Maximum:** I first traversed the `candies` array to identify the current maximum number of candies any kid has.
2. **Comparison:** I then looped through the array again, adding `extraCandies` to each kid's current amount and comparing it to the `maxCandies`.
3. **Result:** If the new sum was greater than or equal to the maximum, I pushed `true` to the result array; otherwise, `false`.

### 🚩 Challenges & Bug Hunting
Initially, I tried to find the maximum value using:
`let maxCandies = Math.max(candies);`

**The Problem:** I ran into a bug because `Math.max()` does not accept an array as an input; it expects a list of individual numbers as arguments. Passing an array results in `NaN`.

**The Fix:** To move forward, I implemented a manual `for` loop to find the maximum value, which worked perfectly and kept the logic clear.

### 📚 Post-Submission Learning: The Spread Operator (`...`)
After successfully submitting, I explored other solutions and discovered a more concise way to find the maximum using the **Spread Operator**:

```javascript
let maxCandies = Math.max(...candies);
```

What I learned: The spread operator (...) "unpacks" the array into individual elements, allowing Math.max to process them correctly. This is a much cleaner and more "JavaScript-y" way to find the maximum in an array.
⏱️ Complexity Analysis
Time Complexity: 
O
(
n
)
O(n)
 — I performed two linear scans of the array (one to find the max, one to build the result).
Space Complexity: 
O
(
n
)
O(n)
 — To store and return the boolean result array.
💡 Key Takeaway
This problem reminded me that even "Easy" tasks have hidden lessons. I'm glad I encountered the Math.max bug because it led me to learn about the Spread Operator, which will definitely make my future code more elegant.
