// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate. 

function dupEncoder(str) {
    // ignore capitalization by making string lowercase and turn to array
    let strArray= str.toLowerCase().split('')
    
    //create new array and replace duplicates with ')'
    let ans = strArray.map(a => {
      if(strArray.indexOf(a) === strArray.lastIndexOf(a)){
        return '('
      }else{
        return ')'
      }
    })
  
    //turn array back to string
    return ans.join('')
  }
  
