//Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.



function evenNums(arr,num) {
  //filter out evens
  //grab only the last array of length num

  return arr.filter(a => a % 2 === 0).slice(-num)
}