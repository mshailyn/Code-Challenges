// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:
// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.



function jewelsInStones(jewels,stones) {
   //Creat a variable to hole number of jewels and initialize at 0
   let numJewels = 0
   //Loop through each value in stones and see if Jewels contains that value
   for( let l of stones){
   //if jewels contains value increase variable of jewels
     if(jewels.includes(l)){
       numJewels++
     }
   }
   return numJewels
}
 
console.log(jewelsInStones("aA","aAAbbbb"), 3); 
console.log(jewelsInStones("z","ZZ"), 0); 
console.log(jewelsInStones("ab", "AaaAbbBB"), 4)
