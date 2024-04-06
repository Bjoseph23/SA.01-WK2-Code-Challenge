const prompt = require('prompt-sync')({ sigint: true }); 

function generateArrayBetween(start, end) {
  // Validate input (start should be less than or equal to end)
  if (start > end) {
    console.error("Error: Start number must be less than or equal to end number.");
    return 
  }

  const result = []; //Create a blank array where values in between orignal values will enter 
  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

// Get user input and store into array per index
const numbers = [];
numbers[0] = (prompt("Enter the first number: "));
numbers[1] = (prompt("Enter the second number: "));

//Call our function and pass the index of the user input as arguments (the first for start and the second for stop ) to initialize the incrimentation in the function
const generatedArray = generateArrayBetween(numbers[0], numbers[1]);

console.log("The generated array is:", generatedArray);
