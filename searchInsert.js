//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.



var searchInsert = function(nums, target) {
    if(nums.includes(target)){
        return nums.indexOf(target)
    }else{
        nums.push(target)
        return nums.sort((a,b) => a-b).indexOf(target)
    }
};