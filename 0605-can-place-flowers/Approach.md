# 📝 My Approach & Learning Journey

This problem was a significant learning milestone for me. It took about **48 minutes** to solve, involving several logic resets, debugging sessions, and post-submission optimizations.

### 1. Initial Approach
My first attempt was fundamentally wrong because I misinterpreted the problem's requirements.
- **Wrong Logic:** Initially, I tried to count "1s preceded by 0s" or simple transitions, but I soon realized that the problem is about finding **valid gaps** where a new flower can be planted without violating the "no-adjacent" rule.
- **Syntax Errors:** I ran into basic issues like missing parentheses in `if` statements and using `=` instead of `>=`.

### 2. Challenges & Lessons
Through testing, I realized two crucial things:
1. **Array Mutation is Mandatory:** At first, I was only incrementing a counter. I soon learned that once a flower is "planted," I must update the array (`flowerbed[i] = 1`). Otherwise, the next iteration won't know that its neighbor is no longer empty.
2. **Boundary Conditions:** The first and last elements are tricky. If the array has only one element `[0]`, you can plant a flower. If the first two are `[0, 0]`, you can plant at index 0. I handled these manually with separate `if` blocks for the start, middle, and end of the array.

### 3. Final Approach
After solving the problem with my initial manual approach, I studied more optimized solutions and learned several useful techniques:
- **Unified Logic:** Instead of separate `if` blocks for edges, I can use `(i === 0 || flowerbed[i - 1] === 0)` and `(i === flowerbed.length - 1 || flowerbed[i + 1] === 0)` to handle boundary conditions in one condition.
- **Early Exit:** Instead of only maintaining a counter, I can decrement `n` directly and return `true` as soon as `n` reaches 0.
- **Clean Returns:** I learned to replace `if (count >= n) { return true; } else { return false; }` with the simpler `return count >= n;`.

### ⏱️ Complexity Analysis
- **Time Complexity:** `O(n)` — The flowerbed is traversed at most once.
- **Space Complexity:** `O(1)` — No additional data structures proportional to the input size are used; the input array is modified in place.

### 💡 Key Takeaway
This problem taught me the importance of reading the prompt carefully and the power of **Refactoring**. My initial code was 30+ lines, but the optimized logic does the same job in less than 10 lines. It’s not just about getting the "Accepted" status; it's about how elegantly you reach it.
