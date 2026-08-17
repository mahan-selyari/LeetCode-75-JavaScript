<h2><a href="https://leetcode.com/problems/increasing-triplet-subsequence">334. Increasing Triplet Subsequence</a></h2><h3>Medium</h3><hr><p>Given an integer array&nbsp;<code>nums</code>, return&nbsp;<code>true</code> if there exists a triple of indices&nbsp;<code>(i, j, k)</code> such that&nbsp;<code>i &lt; j &lt; k</code> and&nbsp;<code>nums[i] &lt; nums[j] &lt; nums[k]</code>. If no such indices exists, return&nbsp;<code>false</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4,5]
<strong>Output:</strong> true
<strong>Explanation:</strong> Any triplet where i &lt; j &lt; k is valid.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,4,3,2,1]
<strong>Output:</strong> false
<strong>Explanation:</strong> No triplet exists.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,1,5,0,4,6]
<strong>Output:</strong> true
<strong>Explanation:</strong> One of the valid triplet is (1, 4, 5), because nums[1] == 1 &lt; nums[4] == 4 &lt; nums[5] == 6.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>5</sup></code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<p><strong>Follow-up:</strong> Could you implement a solution that runs in <code>O(n)</code> time complexity and <code>O(1)</code> space complexity?</p>

### 🧠 Approach & Logic
For a detailed explanation of my thought process, the challenges I faced, the different approaches I tried, and the final optimized solution, please refer to my notes:
👉 [Read My Implementation Journey](./Approach.md)
