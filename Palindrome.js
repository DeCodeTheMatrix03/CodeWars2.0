/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/


function isPalindrome(myString) {
    // transform the input string to lowercase
    const lowercaseInput = myString.toLowerCase();
  
    // to have a similar wording
    const forward = lowercaseInput;
  
    // get the backward version of the lowercase string
    const backward = lowercaseInput.split("").reverse().join("");
  
    // check if the forward string is the same as the backward string
    return forward === backward;
  }