# 📝 My Approach & Learning Journey

## 1. Understanding the Problem

The goal is to move every `0` to the end of the array while keeping the relative order of all non-zero numbers.

There are two important constraints:

- The array must be modified **in-place**.
- I should not create a second array to store the answer.

For example:

```text
nums = [0, 1, 0, 3, 12]
→ [1, 3, 12, 0, 0]
```

## 2. My Initial Idea: Two Pointers

I first thought about using two pointers:

```text
left  → position containing a zero
right → search for the next non-zero number
```

My first implementation used three variables:

```js
let i = 0;
let left = 0;
let right = 1;
```

The idea was that whenever `left` pointed to `0`, I would move `right` forward until I found a non-zero number, then swap the two values.

I thought this was reasonable because it directly represents the operation the problem asks for: find a zero and replace it with the next non-zero value.

## 3. Mistakes I Made

### Mistake 1: `right` could go outside the array

I initially wrote the condition like this:

```js
if (nums[right] !== 0 && right < nums.length)
```

This is unsafe because JavaScript evaluates conditions from left to right. It tries to access `nums[right]` before checking whether `right` is inside the array.

The safer order is:

```js
if (right < nums.length && nums[right] !== 0)
```

I also encountered a Node.js memory error while debugging the pointer logic. The underlying problem was that my pointer states were not being controlled cleanly and `right` could keep moving beyond the valid range.

### Mistake 2: I used too many pointers

I used:

```js
i
left
right
```

But `i` was not actually necessary. I was using it only to control the loop while `left` and `right` were already moving through the array.

This made the logic harder to reason about and created more opportunities for the pointers to become inconsistent.

### Mistake 3: Pointer movement became complicated

I had several different cases where `left` and `right` were incremented separately. That made it difficult to guarantee that `left` always represented the correct position for the next non-zero element.

The code was becoming more complicated than the problem required.

### Mistake 4: I focused on moving zeros instead of placing non-zero values

My original idea explicitly searched for a non-zero value whenever `left` found a zero.

A simpler way to think about the problem is:

> Instead of searching for zeros to move, scan the array and place every non-zero value in the next available position.

That observation makes the two-pointer solution much cleaner.

## 4. The Better Two-Pointer Idea

I can still use two pointers, but their responsibilities are clearer:

```text
right → scans every element
left  → position where the next non-zero element should go
```

Whenever `nums[right]` is non-zero, I swap it with `nums[left]` and move `left` forward.

If `nums[right]` is zero, I do nothing except let `right` continue scanning.

For example:

```text
[0, 1, 0, 3, 12]
 ↑  ↑
left right
```

`right` finds `1`, so I put it at `left`:

```text
[1, 0, 0, 3, 12]
    ↑
   left
```

Then `right` continues scanning. When it finds `3`, it is placed at the next available position:

```text
[1, 3, 0, 0, 12]
       ↑
      left
```

Finally, `12` is placed in the next position:

```text
[1, 3, 12, 0, 0]
```

The zeros naturally remain behind the non-zero elements.

## 5. Final Optimized Solution

```js
var moveZeroes = function(nums) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
    }
};
```

### How it works

`right` checks every element exactly once.

If the current element is non-zero:

```js
if (nums[right] !== 0)
```

I place it at the position represented by `left`:

```js
[nums[left], nums[right]] = [nums[right], nums[left]];
```

Then `left` moves to the next position where a non-zero number can be placed:

```js
left++;
```

If the current element is zero, nothing needs to be done. `right` simply continues scanning.

## 6. Why the Relative Order Is Preserved

The non-zero elements are encountered from left to right by `right`.

They are also placed from left to right by `left`.

Therefore, their original relative order is preserved.

For example:

```text
[0, 5, 0, 3, 2]
```

The non-zero values are encountered in this order:

```text
5 → 3 → 2
```

So they are placed in exactly the same order:

```text
[5, 3, 2, 0, 0]
```

## 7. Complexity Analysis

The array is traversed only once:

```text
Time Complexity: O(n)
```

No second array is created. Only the two pointer variables are used:

```text
Extra Space Complexity: O(1)
```

The solution satisfies the in-place requirement.

## 8. What I Learned

This problem helped me understand that two-pointer problems are not always about two pointers searching in opposite directions.

Here, both pointers move from left to right, but they have different jobs:

- `right` = scanner
- `left` = position for the next valid element

I also learned to be careful when accessing an array with a pointer. The boundary check should happen before accessing the element.

Most importantly, I learned that a solution can have a good general idea but still become unnecessarily complicated because of too many conditions and pointer movements.

### 💡 Key Takeaway

> **Instead of moving every zero to the end, move every non-zero element to its correct position. The zeros will automatically remain at the end.**
