/*
Given a string of text containing 0 or more vowels, count the number of vowels that can be found within the text. For example:

vowelsCounter('anehizxcv') // will return 3

*/

const Vowels = ["a", "e", "i", "o", "u"]

function vowelsCounter(text) {
    // Initialize counter
    let counter = 0;

    // Loop through text to test if each character is a vowel
    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }

    // Return number of vowels
    return counter
}