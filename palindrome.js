//Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.



var isPalindrome = function(x) {
    //turn number to arraynd reverse
    let num = x.toString().split('').reverse()
    
    //compare reversed number
    return Number(num.join('')) === x
};