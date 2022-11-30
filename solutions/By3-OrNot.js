/*

*/

function divisibleByThree(str){
    let numsArr = str.split('').map(letter => Number(letter))
    
    if (numsArr.reduce((a,b) => a+b,0) % 3 === 0){
      return true
    }else{
      return false
    }
    }