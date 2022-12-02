// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 


function reverseString(str) {
  //split string into array and reduce through and add the next letter to the front of the letter before it
  return str.split('').reduce((acc, char) => char + acc, '')
}
 
//for loop method - slightly slower and higher space complexity
// let reversedString = ''
// for(let char of str){
//   reversedString = char + reversedString
// }


console.log( reverseString('ocean'), 'naeco')
console.log( reverseString('beautiful butterfly'), 'ylfrettub lufituaeb')
