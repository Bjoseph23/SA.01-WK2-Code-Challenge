const prompt = require('prompt-sync')({ sigint: true }); // Import prompt-sync for user input

function generateArrayBetween(start, end) {
  // Validate input (start should be less than or equal to end)
  if (start > end) {
    console.error("Error: Start number must be less than or equal to end number.");
    return 
  }

  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

// Get user input and store into array per index
const numbers = [];
numbers[0] = (prompt("Enter the first number: "));
numbers[1] = (prompt("Enter the second number: "));

const generatedArray = generateArrayBetween(numbers[0], numbers[1]);

console.log("The generated array is:", generatedArray);
