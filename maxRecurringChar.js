// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 



function maxCharacters(str) {
  //create a object to store character occurrence
  const charMap ={}
  let maxCharValue = 0
  let maxChar = ''

  //loop through str and store character occurrence
  for(char of str){
    if( charMap[char] ){
      charMap[char]++
      if(charMap[char] > maxCharValue){
        maxCharValue = charMap[char]
        maxChar = char
      }
    }else{
      charMap[char] = 1
    }
  }
  
  return maxChar
}
 
console.log(maxCharacters("Hello World"), "l"); 
console.log(maxCharacters("abracadabra"), "a"); 
console.log(maxCharacters("Good Morning"), "o")
