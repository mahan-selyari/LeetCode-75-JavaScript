# 📝 My Approach & Learning Journey

## 1. Understanding the Problem

The goal is to check whether every character of `s` appears in `t` in the same order. The characters do not need to be next to each other, but their relative order must be preserved.

For example:

```text
s = "abc"
t = "ahbgdc"

→ true
```

The characters `a`, `b`, and `c` appear in `t` from left to right.

## 2. My Initial Idea

I recognized that this could be solved with **Two Pointers**.

I used one pointer for each string:

```text
sIndex  → current position in s
tIndex  → current position in t
```

The idea is to scan through `t`. Whenever `t[tIndex]` matches the character I am currently looking for in `s`, I move `sIndex` forward.

My first version was:

```js
let sLeft = 0;

for (let i = 0; i < t.length; i++) {
    if (s[sLeft] === t[i]) {
        sLeft++;
    }
}

return sLeft === s.length;
```

## 3. Improving My Variable Names

The logic was correct, but I changed the variable names to make the two pointers clearer.

Instead of:

```js
sLeft
 i
```

I used:

```js
sIndex
 tIndex
```

This makes it immediately clear which string each pointer belongs to:

```text
sIndex → index in s
tIndex → index in t
```

The final version became easier to read without changing the algorithm.

## 4. How the Two Pointers Work

For:

```text
s = "abc"
t = "ahbgdc"
```

Initially:

```text
s: a b c
   ↑
 sIndex

t: a h b g d c
   ↑
 tIndex
```

`tIndex` moves through every character of `t`.

When it finds `a`, it matches `s[sIndex]`, so:

```js
sIndex++;
```

Now we are looking for `b`.

The same process continues until all characters of `s` have been found in order.

At the end:

```js
sIndex === s.length
```

means every character of `s` was successfully matched.

## 5. Final Solution

```js
var isSubsequence = function(s, t) {
    let sIndex = 0;

    for (let tIndex = 0; tIndex < t.length; tIndex++) {
        if (s[sIndex] === t[tIndex]) {
            sIndex++;
        }
    }

    return sIndex === s.length;
};
```

### Why this works

`tIndex` scans the entire `t` string from left to right.

`sIndex` only moves when the next required character from `s` is found.

Because `sIndex` never moves backward, the characters of `s` are matched in their required order.

If `sIndex` reaches `s.length`, every character from `s` has been matched and the answer is `true`.

Otherwise, at least one character from `s` could not be found in the correct order, so the answer is `false`.

## 6. Important Edge Case

If `s` is empty:

```text
s = ""
t = "abc"
```

then:

```js
sIndex === s.length
0 === 0
```

so the function correctly returns `true`.

## 7. Complexity Analysis

The loop scans `t` once:

```text
Time Complexity: O(t.length)
```

Only two index variables are used:

```text
Space Complexity: O(1)
```

## 8. What I Learned

This problem helped reinforce the Two Pointers pattern.

The important idea is that the two pointers do not have to move in the same way:

- `tIndex` moves on every iteration.
- `sIndex` moves only when a matching character is found.

So this is a good example of **two pointers moving at different speeds**.

I also learned that good variable names matter. `sIndex` and `tIndex` make the roles of the pointers obvious and are clearer than a generic name such as `i`.

### 💡 Key Takeaway

> **Use one pointer to scan the larger string and another pointer to track the next character you need to match.**
