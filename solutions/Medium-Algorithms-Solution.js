/*
Given a string of characters, return the character that appears the most often.
*/

function maxChar(string){

  const obj = {}
  let maxNum = 0
  let character = ''
  
  for(const index in string){
   obj[string[index]] = obj[string[index]] + 1 || 1
}
  for(const i in obj){
  if(obj[i] > maxNum){
  maxNum = obj[i]
  character = i
    }
  }
  return character
}
