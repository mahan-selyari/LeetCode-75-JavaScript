# 📝 My Approach & Learning Journey

This problem took me about **50 minutes** to solve. The main challenge was understanding how to find an increasing triplet while preserving the order of the elements and achieving the required `O(n)` time and `O(1)` space complexity.

### 1. Initial Idea: Find Three Minimum Values

My first idea was to find the smallest value, remove it, then find the next smallest value, and finally find the third smallest value.

The idea was roughly:

```text
first minimum
      ↓
remove it
      ↓
second minimum
      ↓
remove it
      ↓
third minimum
```

Then I wanted to check:

```text
first < second < third
```

However, this approach has a fundamental problem: **the smallest three values are not necessarily in increasing index order**.

For example:

```text
[5, 4, 3, 2, 1]
```

The three smallest values are:

```text
1, 2, 3
```

and:

```text
1 < 2 < 3
```

But their positions are:

```text
4 → 3 → 2
```

while the problem requires:

```text
i < j < k
```

So finding three increasing values is not enough. They must also appear in the correct order in the array.

### 2. JavaScript Mistakes During the First Attempt

I also encountered several JavaScript issues while exploring this idea.

#### `remove()` does not exist

I initially tried to remove an element using:

```js
nums.join(" ").remove(i)
```

But `join()` converts the array into a string, and JavaScript does not have a standard `remove()` method for strings.

More importantly, removing elements was not necessary for solving the problem.

#### Chained comparisons do not work like mathematics

I initially considered:

```js
i < j < k
```

In JavaScript, this does not mean what it means mathematically.

It is evaluated from left to right:

```text
(i < j) < k
```

For multiple comparisons, the correct logical structure requires separate comparisons joined with `&&`.

This was an important reminder that mathematical notation and JavaScript syntax do not always behave the same way.

### 3. Second Idea: Keep `first`, `second`, and `third`

I then moved toward keeping three values:

```text
first
second
third
```

and trying to update them while traversing the array.

I realized that I did not actually need to store all three values.

The third value can simply be the **current element**.

If:

```text
first < second < nums[i]
```

then an increasing triplet has already been found.

This reduced the problem from tracking three stored values to tracking only two.

### 4. Understanding What `first` and `second` Should Represent

The key insight was:

> I don't need the actual triplet. I only need the best possible candidates for the first two elements.

So I started thinking of them as:

```text
first  → smallest possible first value
second → smallest possible second value after first
```

Why should they be as small as possible?

Because smaller values make it easier to find a larger value later.

For example:

```text
first = 1
second = 8
```

If I encounter:

```text
3
```

then `3` is a better candidate for `second`:

```text
first = 1
second = 3
```

because finding a number greater than `3` is easier than finding one greater than `8`.

### 5. Mistake: Updating `first` in the Wrong Direction

At one point I used logic similar to:

```text
nums[i] > first
```

when deciding whether to update `first`.

I realized that this was backwards.

If:

```text
first = 5
nums[i] = 2
```

then `2` is a better candidate for `first` because:

```text
2 < 5
```

A smaller first value gives us more opportunities to find the remaining two values.

So:

```text
smaller value → better `first`
```

### 6. Mistake: Using a Second Pass to Find the Third Value

I also tried to first determine `first` and `second`, and then run another loop to search for a third value.

This was unnecessary and introduced a logical problem.

The important point is that `first` and `second` are updated while traversing the array. If I wait until after the first pass to search for the third value, I lose the connection between the candidates and their original positions.

The better approach is to check for the third value **during the same traversal**.

When the current value satisfies:

```text
nums[i] > second
```

we immediately know:

```text
first < second < nums[i]
```

and because we are traversing from left to right, the required index order is preserved.

### 7. Final Approach

The final idea became much simpler.

Maintain only:

```text
first
second
```

For every element:

1. If it is smaller than `first`, make it the new `first`.
2. Otherwise, if it is between `first` and `second`, make it the new `second`.
3. Otherwise, if it is greater than `second`, an increasing triplet exists.

The final implementation is:

```js
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < first) {
            first = nums[i];
        } else if (nums[i] > first && nums[i] < second) {
            second = nums[i];
        }

        if (nums[i] > second) {
            return true;
        }
    }

    return false;
};
```

### 8. Example

For:

```text
[2, 1, 5, 0, 4, 6]
```

The values evolve approximately like this:

```text
2 → first = 2

1 → first = 1

5 → second = 5

0 → first = 0

4 → second = 4

6 → 6 > second
   → true
```

The increasing triplet is:

```text
1 < 4 < 6
```

and their indices are also increasing.

### 9. Complexity Analysis

The array is traversed only once.

Therefore:

```text
Time Complexity: O(n)
```

Only two variables are used regardless of the size of the input:

```text
Space Complexity: O(1)
```

This satisfies the follow-up requirement of the problem.

### 10. What I Learned

This problem taught me several important concepts:

- The smallest values are not necessarily a valid subsequence because **index order matters**.
- A problem asking for three values does not necessarily require storing three values.
- The current element can act as the third value.
- Keeping the **smallest possible candidates** can make future conditions easier to satisfy.
- Multiple loops are not always bad, but here a single pass is enough.
- When traversing from left to right, the index order can be preserved naturally.
- `O(n)` time and `O(1)` space can sometimes be achieved by maintaining only a small amount of state.
- JavaScript comparisons such as `i < j < k` do not behave like mathematical chained inequalities.
- `return` immediately exits a function, so a `break` after `return` is unnecessary.
- A variable such as `flag` is unnecessary when the desired result can be returned immediately.

### 💡 Key Takeaway

The biggest lesson from this problem was:

> **Don't try to explicitly construct the entire solution if you can maintain the minimum information needed to prove that the solution exists.**

Instead of searching for three elements directly, I only needed to maintain the best possible candidates for the first two elements and use the current element as the potential third element.
