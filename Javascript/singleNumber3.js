// https://leetcode.com/problems/single-number-iii/

// 260. Single Number III
// Medium
// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.
// Follow up: Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

// Example 1:
// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.

// Example 2:
// Input: nums = [-1,0]
// Output: [-1,0]

// Example 3:
// Input: nums = [0,1]
// Output: [1,0]

singleNumber = (nums) =>{
    let newArr = nums.sort();
    
    
    return newArr
    // thinking in progress
}
console.log(singleNumber([1,2,1,3,2,5]))