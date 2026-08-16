# 📝 My Approach & Learning Journey

This problem took me about **25 minutes** to solve.

It was a simple problem conceptually, but I ran into a few small mistakes along the way. More importantly, while solving it, I discovered the **Two Pointers** technique, which I found surprisingly interesting and useful.

### 1. My Initial Approach

My first idea was straightforward:

1. Find all vowels in the string.
2. Store their positions.
3. Reverse the vowels.
4. Put them back into their original positions.

I converted the string into an array using `[...s]`, collected the vowels and their indexes, reversed the vowels using `.reverse()`, and then placed them back.

This approach works and has a time complexity of **O(n)**, but it uses extra arrays to store the vowels and their indexes.

### 2. Challenges & Mistakes

I made several small mistakes while solving the problem:

- **Vowels as variables:** When defining `vowels`, I initially wrote the letters without quotation marks, treating them as variables instead of strings.
- **Method typo:** I accidentally wrote `revese` instead of `reverse`.
- **The biggest bug:** After fixing everything I could see, the code still returned exactly the same string I entered.

At first, I couldn't understand why. I went back through the code, checked the logic, and analyzed it step by step.

Eventually, I found the problem:

```javascript
sArray.lengh
```

instead of:

```javascript
sArray.length
```

Because of this small typo, the main loop never executed.

It was a good reminder that sometimes the algorithm can be completely correct, but a tiny spelling mistake can make the entire program behave as if nothing is happening.

### 3. Further Learning: Two Pointers

After getting my solution working, I searched for a more efficient approach and came across the **Two Pointers** technique.

I really liked this idea.

The basic concept is simple: instead of collecting all the vowels first, we use **two pointers**, one starting from the beginning of the string and one starting from the end.

Think of them as two people searching for vowels from opposite sides:

- The `left` pointer moves from left to right until it finds a vowel.
- The `right` pointer moves from right to left until it finds a vowel.
- Once both pointers are standing on vowels, we swap them.
- Then both pointers move inward and repeat the process.

For example:

```text
h e l l o
↑       ↑
L       R
```

`L` finds `e` and `R` finds `o`.

So we swap them:

```text
h o l l e
```

Then the pointers move inward and continue.

An important part of the technique is that the pointers don't always move together.

If `left` finds a vowel but `right` is standing on a consonant, we don't swap anything. We simply move `right` until it finds a vowel.

This makes the algorithm feel almost like two people searching toward each other, each responsible for finding the next useful character.

### 4. Final Approach

The final approach uses:

1. Convert the string into an array so its characters can be modified.
2. Set two pointers: `left` at the beginning and `right` at the end.
3. Move `left` until it reaches a vowel.
4. Move `right` until it reaches a vowel.
5. Swap the two vowels.
6. Move both pointers toward the center.
7. Repeat until the pointers meet.

This avoids storing the vowels and their indexes separately.

### 5. Complexity Analysis

**Time Complexity: `O(n)`**

Each pointer moves through the string from one side toward the other. Together, the characters are processed linearly.

**Space Complexity: `O(n)`**

The string is converted into an array using `[...s]`, which requires additional space proportional to the input size.

The **Two Pointers technique itself** only needs `O(1)` extra pointer space.

### 💡 Key Takeaway

This problem taught me more than just how to reverse vowels.

I learned that debugging is often about carefully questioning small details instead of immediately assuming the algorithm is wrong.

I also discovered **Two Pointers**, a technique that I found genuinely interesting because of how simple the idea is while still being very powerful.

The biggest lesson for me was:

> **Sometimes the best optimization isn't making the code more complicated — it's finding a better way to think about the problem.**
