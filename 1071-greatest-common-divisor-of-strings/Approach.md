# 📝 Process & Reflection: How I Solved This

Solving this problem was a journey of trial and error that took me about **1.5 hours**. I moved from a basic "hardcoded" mindset to a creative experimental phase, and finally to a mathematically optimized solution.

### 1. The Early Stage: Hardcoding & Parity
At the very beginning, I tried to handle the problem using multiple `if-else` statements.
- I specifically focused on strings with a **length of 4** to see if they were even.
- I thought if the length was even, I could just return the first two characters.
- **The Lesson:** I quickly realized that this was too limited. The patterns could be odd-lengthed or much longer, and hardcoding specific cases wouldn't work for hidden test cases.

### 2. The Creative Phase: Array Iteration & Index Searching
Next, I tried a more "outside the box" approach using arrays and built-in string methods:
- I used an array to store potential candidates.
- I experimented with `indexOf` and `lastIndexOf` to find the largest repeating prefix. 
- **The Logic:** My idea was that if `indexOf` and `lastIndexOf` returned different values for a prefix while searching from back-to-front, it meant the prefix was repeating. 
- **The Result:** While this was a creative way to think about the problem, it was becoming complex to manage. However, it led me to think about "divisors" more seriously.

### 3. The Final Optimized Implementation (Current Code)
I eventually reached the solution I submitted, which combines logic and efficiency:
- **Divisor Strategy:** I find all divisors of `str1.length`, then check which ones also divide `str2.length`. The largest common one is my target length.
- **The Symmetry Trick:** I learned that the most efficient way to check if a pattern *exists* is `str1 + str2 === str2 + str1`. If this fails, there is no common divisor string.
- **Efficiency:** This approach is much cleaner and faster than my initial experiments.

### 📚 Post-Submission Learning: The Euclidean Algorithm
After getting my "Accepted" status, I did some extra research to see how the "pros" do it. I discovered the **Euclidean Algorithm**. 

Instead of manually building an array of divisors (like I did), this algorithm finds the GCD in logarithmic time using the remainder:

```javascript
const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));
```
I plan to use this optimized mathematical approach in future problems involving GCD.
⏱️ Complexity Analysis (My Implementation)
Time Complexity: 
O(N+M)- Where N and M are lengths of the strings, due to concatenation and divisor checking.
Space Complexity: 
O(D)- Where D is the number of divisors stored in the array.
💡 Key Takeaway
This problem taught me that a "brute-force" start is okay, but looking for mathematical properties (like symmetry and GCD) is what leads to elegant and efficient code.
