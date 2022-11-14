// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

  
//BRUTE FORCE
function gimme(array) {
    //Sort - Time Complexity O(n log n)
  let sortArr = [...array].sort((a,b) => a-b)
  //return index in first array of second item in sorted array - Time Complexity O(n)
  return array.indexOf(sortArr[1]) 
}

//We will always be deailing with an array of 3 numbers so Time Complexity does not matter in this situation.
 
console.log(gimme([5, 10, 14]), 1)
console.log(gimme([2, 3, 1]), 0) 
console.log(gimme([3, 7, 5]), 2) 