/*
Given an array of two numbers, return the cummulative sum of the two numbers and all the numbers between them. E.g
*/

function rangeSum(arr){
    let sum = 0
    for(i = arr[0]; i<=arr[1]; i++){
        sum += i;
    }

    return sum
}

console.log(rangeSum([1,9]))