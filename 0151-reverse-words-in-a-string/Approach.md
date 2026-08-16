# 📝 My Approach & Learning Journey

This problem took me about **15 minutes** to solve.

I was able to solve it relatively quickly because it was closely related to the previous problem. The previous problem and this one felt like they belonged to the same family: in the previous problem, I was reversing specific characters under certain conditions, while here I was reversing **words** instead.

### 1. Removing Leading and Trailing Spaces

The first thing I noticed was that the input could contain spaces at the beginning and end.

So I first thought:

> **The spaces at the beginning and end always need to be removed.**

This is where `trim()` came in.

### 2. Handling Spaces Between Words

The next problem was the spaces inside the string.

I converted the string into an array using `split()` because I found it easier to work with the individual parts.

Then I used `filter()` to remove the empty parts created by multiple spaces.

At this point, the array essentially contained only the words, without the unnecessary spaces between them.

### 3. Reversing the Words

Once the array contained only the words, the solution became very simple.

I reversed the array and then used `join()` to turn it back into a string, putting **one space between each word**.

So the overall idea became:

> **Clean the string → separate the words → remove empty parts → reverse the words → join them with one space.**

### 4. Why This Problem Felt Easier

This problem was faster for me because I had just solved a very similar problem.

The previous problem taught me the idea of reversing specific elements while keeping the rest of the string unchanged.

This time, instead of reversing individual characters, I was reversing the **positions of the words**.

That connection helped me recognize the structure of the problem much faster.

### 5. Further Learning: Regular Expressions

After solving the problem, I searched for a cleaner way to handle the spaces and came across **Regular Expressions (Regex)**.

In simple terms, Regex is a way to describe a **pattern** inside text.

For this problem, I only needed one simple pattern:

```text
\s+
```

It means:

- `\s` → any whitespace character
- `+` → one or more times

So `\s+` basically means:

> **Find one or more whitespace characters next to each other.**

This is useful because I don't need to know whether there are one, two, or ten spaces between words. Regex treats all of them as one separator.

Using this approach, the solution becomes:

```javascript
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(" ");
};
```

The process is:

> **`trim()`** → remove spaces from the beginning and end  
> **`split(/\s+/)`** → separate the words regardless of how many spaces are between them  
> **`reverse()`** → reverse the order of the words  
> **`join(" ")`** → put the words back together with exactly one space between them

For example:

```text
"  hello    world   javascript  "
                ↓
["hello", "world", "javascript"]
                ↓
["javascript", "world", "hello"]
                ↓
"javascript world hello"
```

This Regex solution is much shorter than my original approach, but I found my first solution more useful for understanding the problem step by step.

The Regex version is something I learned **after solving the problem**, rather than something I relied on to get the original solution.

### 6. Complexity Analysis

#### My Approach

**Time Complexity: `O(n)`**

The string is processed linearly through the different operations.

**Space Complexity: `O(n)`**

The string is converted into an array of words, so additional space proportional to the input size is used.

#### Regex Approach

**Time Complexity: `O(n)`**

The string is processed linearly to trim whitespace, split it into words, reverse the words, and rebuild the result.

**Space Complexity: `O(n)`**

The words are stored in an array, so the additional space grows with the size of the input.

The Regex approach is therefore **shorter and cleaner**, but it does not improve the asymptotic time or space complexity compared with my original approach.

### 💡 Key Takeaway

The biggest advantage I had in this problem was recognizing the connection with the previous one.

Instead of seeing it as a completely new problem, I could reuse the same general idea:

> **Understand what needs to be reversed, prepare the data so it's easy to work with, reverse it, and then rebuild the final result.**

This made the problem much faster to solve and showed me how solving problems one after another can help build patterns in my mind.
