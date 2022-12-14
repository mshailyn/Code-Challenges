// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


var majorityElement = function(nums) {
    let numCache = {};
    let majEl = nums[0]
    
  
    for(let number of nums){
      numCache[number] = numCache[number] + 1 || 1
      numCache[number] > nums.length/2  ? majEl = number : majEl
    }
  
    return majEl
  };



//or --Faster for smaller arrays

var majorityElement = function(nums) {
  nums.sort((a,b) => a-b)
  return nums[Math.floor(nums.length/2)]
};