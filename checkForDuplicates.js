// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
  
function checkForDuplicates(nums) {
  let numCache = {}
  let ans = false
  for(number of nums){
    if( numCache[number] ){
      ans = true
    }else{
      numCache[number] = true
    }
  }
  return ans
}
 
console.log(checkForDuplicates([1,2,3,1]), true); 
console.log(checkForDuplicates([1,2,3,4]), false); console.log(checkForDuplicates([1,1,1,3,3,4,3,2,4,2]), true)