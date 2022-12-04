//imperative approach

function arrayFilter(arr,func){
    for(let elem of arr){
        if(func(elem)){
            return elem
        }
    }
    return undefined
}
//filter
function arrayFilter(arr, func){
    let filteredArray = arr.filter(func)
    return filterArray[0] ? filteredArray[0] : underfined;
}

//find
function arrayFIlter(arr, func){
  return  arr.find(func)
}