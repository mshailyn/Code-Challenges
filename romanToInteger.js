//Given a roman numeral, convert it to an integer.
//1 <= s.length <= 15
//s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
//It is guaranteed that s is a valid roman numeral in the range [1, 3999].




var romanToInt = function(s) {
 let ans = 0
 s.split('').reverse().map((a,i,arr) => {
     if(a === 'I'){
         arr[i-1] === 'V' || arr[i-1] === 'X' ? ans : ans = ans+1
         
     }else if(a === 'V'){
         arr[i+1] === 'I' ? ans = ans + 4 : ans = ans + 5
         
     }else if(a === 'X'){
         if(arr[i-1] === 'L' || arr[i-1] === 'C'){
             ans
         }else{
             arr[i+1] === 'I' ? ans = ans + 9 : ans = ans + 10
         }
         
     }else if(a === 'L'){
         arr[i+1] === 'X' ? ans = ans + 40 : ans = ans + 50
         
     }else if(a === 'C'){
         if(arr[i-1] === 'D' || arr[i-1] === 'M'){
             ans
         }else{
             arr[i+1] === 'X' ? ans = ans + 90 : ans = ans + 100
         }
         
     }else if(a === 'D'){
         arr[i+1] === 'C' ? ans = ans + 400 : ans = ans + 500
         
     }else if(a === 'M'){
         arr[i+1] === 'C' ? ans = ans + 900 : ans = ans + 1000
     }
 })
    return ans
};