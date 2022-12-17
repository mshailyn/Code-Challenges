// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



var twoSum = function(nums, target) {
    let numMap = {}
    let solution = []

    nums.map((a,i) => {
        let num2 = target - a
        if( numMap[num2] ){
            solution.push(i, nums.indexOf(num2))
        }else{
            numMap[a] = true
        }
    })
    return solution
};