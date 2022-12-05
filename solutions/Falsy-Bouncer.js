/*
Given an array, remove all falsy values from the array and return an array of only truthy values. E.g
*/

//for of 
function falsyBouncer(array){
    let result = []
    //loop through each array value
    for (value of array){
        //push result if true
        if(value){
            result.push(value)
        }
    }
}

//.filter method

function falsyBouncer(array){
    return array.filter((value) => {
        return Boolean(value)
    })
}
console.log(falsyBouncer([1, 0, null, '', 5])) 
