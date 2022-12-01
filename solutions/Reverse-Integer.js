//Given an integer, return an integer that has the reverse ordering of that which was received. E.g


/*
Convert the Integer to a string
Create and array of characters from the string
Reverse the array
Join the reversed array to form a new string
Convert the reversed string back into an integer
Add the sign that corresponds with the received integer
Return the result
*/

function reversedString(text){
    return [...text].reduce((acc,currentChar) => currentChar + acc, '')
    let reversedString = reversedString(num.toString())

    let reversedNumber = parseInt(reversedString)

    return (reversedNumber * Math.sign(num))
}