/*
Return the lowest index at which a value (second argument) i.e **num** should be inserted into an array (first argument) i.e **arr** once it has been sorted. The returned value should be a number. E.g
*/


//for loop that loops through each index in ascending order then returns the index of where the conditional statement is true
function whereIBelong(arr,num){
    arr.sort((a,b) => a-b)

    for(let i=0; i<arr.length; i++){
        if(arr[i] >= num){
            return i
        }
    }
    return arr.length
}

//finding the index directly

function whereiBelong(arr,num){

    arr.push(num)
    arr.sort((a,b) => a-b)
    return arr.indexOf(num)
}