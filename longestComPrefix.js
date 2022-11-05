// Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.



var longestCommonPrefix = function(strs) {
    let prefix= ""
    for(let i = 0; i < strs[0].length; i++){
        let test = strs[0].slice(0, i+1)
        if( strs.every(el => el.slice(0, i+1).includes(test)) ){
            prefix = test
        }
    }
    return prefix
};