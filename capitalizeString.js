const prompt = require("prompt-sync")({ sigint: true }); 
const string = prompt("Please enter a string: ") ; // Get user input

//Define our function that capitalizes the string
function stringUppercase(string){ 
    return string.toUpperCase()
}

//See the output
const result=stringUppercase(string)
console.log(result)
