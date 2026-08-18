# 📝 My Approach & Learning Journey

## 1. Recognizing the Pattern

I initially needed help identifying which Two Pointers pattern this problem uses.

This problem is a classic **Two Pointers from opposite directions** problem.

The important observation is that after sorting the array, I can use:

```text
left  → smallest remaining number
right → largest remaining number
```

Then I compare their sum with `k`.

## 2. Sorting the Array

I first sort `nums` numerically:

```js
nums.sort((a, b) => a - b);
```

Sorting is necessary because it allows me to decide which pointer should move based on the current sum.

For example:

```text
[1, 2, 3, 4]
 ↑        ↑
left    right
```

## 3. The Two-Pointer Logic

I calculate:

```js
let sum = nums[left] + nums[right];
```

There are three possible cases.

### Case 1: `sum === k`

A valid pair has been found.

So I increase the answer and move both pointers toward the center:

```js
counter++;
left++;
right--;
```

### Case 2: `sum > k`

The sum is too large.

Because the array is sorted, the only useful move is to decrease the larger value:

```js
right--;
```

### Case 3: `sum < k`

The sum is too small.

Because the array is sorted, I need a larger value, so I move the left pointer forward:

```js
left++;
```

## 4. My Implementation

I wrote the solution using `left`, `right`, and `counter`.

My first small mistake was writing:

```js
let right = [nums.length - 1];
```

This creates an array containing the index instead of storing the index as a number.

The correct version is:

```js
let right = nums.length - 1;
```

After fixing that, the two-pointer logic worked correctly.

## 5. What Helped Me Understand the Problem

I already knew the general Two Pointers concept from previous problems such as Move Zeroes and Is Subsequence, but I needed help recognizing that this problem uses a **different Two Pointers pattern**.

The key difference is that here the pointers start at opposite ends:

```text
left →        ← right
```

The important rule I learned is:

> When the array is sorted, the current sum tells me which pointer I should move.

That is the main idea behind this solution.

## 6. Complexity Analysis

Sorting takes:

```text
O(n log n)
```

The two-pointer scan takes:

```text
O(n)
```

Therefore the overall time complexity is:

```text
O(n log n)
```

The algorithm uses only a constant number of explicit variables:

```text
O(1) auxiliary space
```

## 7. Key Takeaway

This problem reinforced a new Two Pointers pattern for me:

```text
Sort
  ↓
left →        ← right
  ↓              ↓
smallest       largest
```

Then:

```text
sum === k → left++, right--
sum > k   → right--
sum < k   → left++
```

The main lesson is that **sorting gives the pointers enough information to decide which direction to move**.