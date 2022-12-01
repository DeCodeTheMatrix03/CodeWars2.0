/*
Given a string of text, write an algorithm that returns the text received in a reversed format. E.g
*/
function reverseString(text)
{ return text.split('').reduce((acc, char) => char + acc , '')}