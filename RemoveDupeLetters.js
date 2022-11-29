// DESCRIPTION:
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces.

  
function removeDupe(strArr) { 
  //turn strings into arrays
  return strArr.map(word => word.split('').filter((a,i,arr) => a !== arr[i-1]).join(''))
}
 
console.log(removeDupe(["abracadabra","allottee","assessee"]), ["abracadabra","alote","asese"])
console.log(removeDupe(["kelless","keenness"]), ["keles","kenes"]),
console.log(removeDupe(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])