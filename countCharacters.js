// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function countCharacters(str) {
  //Create a cache objectto hold character amounts
  let charMap = {}

  //Loop through string and add character into cache
  for (let char of str) {
    if ( charMap[char] ) {
        charMap[char]++
    } else {
        charMap[char] = 1;
    }
}
  return charMap
}
 
console.log(countCharacters("aba"), { a: 2, b: 1 }); 
console.log(countCharacters(""), {}); 