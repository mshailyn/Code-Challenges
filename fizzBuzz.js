// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

//Time Complexity = O(n)
//Space Complexity = O(1)
  
function fizzBuzz(num) {
  //Loop through all the numbers 1 through num
  for(let i = 1; i <= num; i++){
    
  //if number is divisible by both 2 and 3
    if(i % 2 === 0 && i % 3 === 0){
      console.log('Fizz Buzz')

  //if number is divisible by 2
    }else if( i % 2 === 0){
      console.log('Fizz')

  //if number is divisible by 3
    }else if( i % 3 === 0){
      console.log('Buzz')

  //if number is divisible by neither
    }else{
      console.log(i)
    }
  }
}
 
fizzBuzz(10) 
console.log(`1, Fizz, Buzz, Fizz, 5, Fizz Buzz, 7, Fizz, Buzz, Fizz`);
fizzBuzz(6)
console.log(`1, Fizz, Buzz, Fizz, 5, Fizz Buzz`)
