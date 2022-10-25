// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.


function solve(arr) {
  //remove duplicates
  let result = arr.map(a =>{
    return [...new Set([...a])]
  })
  //multiple length of each subarray together to number of possible outcomes
  return result.reduce((a,c) => a * c.length, 1)
}



