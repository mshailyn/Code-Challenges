// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

  
function inverseReverse(str) {
  // invert capitalization of string
  let inverse = str.split('').map(a => a === a.toLowerCase()? a.toUpperCase() : a.toLowerCase() ).join('')
  
  //reverse array and return string
  return inverse.split(' ').reverse().join(' ')
}

console.log(inverseReverse("Example Input") , "iNPUT eXAMPLE") 
console.log(inverseReverse("TEST this"), "THIS test") 
console.log(inverseReverse("Running Through The Streets"), "sTREETS tHE tHROUGH rUNNING") 

