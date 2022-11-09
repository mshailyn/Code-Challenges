// Implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

  
function arrayDiff(a, b) {
  //Time Complexity = O(n)
  let newSet = new Set(b)
  return a.filter(n => !newSet.has(n))
}

console.log(arrayDiff([1,2,2,2,3],[2]),[1,3])
console.log(arrayDiff([], [4,5]), []) 
console.log(arrayDiff([3,4], [3]), [4]) 
console.log(arrayDiff([1,8,2], []), [1,8,2])


//Less Optimal Time Complexity = O(n^2)
//return a.filter(function(x) { return b.indexOf(x)===1})