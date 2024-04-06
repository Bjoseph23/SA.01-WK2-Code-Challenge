const prompt = require('prompt-sync')({ sigint: true }); 

function swapCase(str) {  // Declare our function that will itterate through our string and decapitalize the capital letters and vice versea
    //create a blank array to hold out new swapped string
  const swappedString = []; 
  for (let i = 0; i < str.length; i++) {
    const char = str[i]; // Get the current character and use i as an index to access the character at that specific position within the string 
    if (char === char.toUpperCase()) {
        // look at each individual character, check the case, and swapp it to its opposite case and add it to our array called swappedString
      swappedString.push(char.toLowerCase());
    } else {
      swappedString.push(char.toUpperCase());
    }
  }
  return swappedString.join(''); // combines all our elements into a single string being separated by no character ''
}

// Get user input
const userInput = prompt("Enter a string: ");

// Swap the case of the input string
const swappedString = swapCase(userInput);

// Print the swapped string
console.log("Swapped String:", swappedString);
