// Assignment Code
var generateBtn = document.querySelector("#generate");
//these constants contain all of the possible variables.
const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","]","}","|","\\","/",":",";","<",",",">",".","?"]
const numbers = ["0","1","2","3","4","5","6","7","8","9"]

//function to generate password with all user inputs: length, lower/uppercase letters, symbols, and/or numbers
function generatePassword() {
  //password output is an empty string that will be filled at the end of this function
  var passwordOutput = "";

  //randomArray is an empty array that will be filled by input from four if statements asking for which constants to use
  var randomArray = [];

  //passLength will generate a window prompt that the user must give a value to
  var passLength = window.prompt("How many characters would you like your password to be? You must choose a number between 8 and 128");

  //passwordLength must meet certain requirements. while it fails to meet these requirements, the user will be prompted to try again.
  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    var passLength = window.prompt("Not a valid input. Try again");
  }
  //once user inputs a valid number, they will be alerted with this string
  window.alert ("You said you'd like your password to be " + passLength + " characters.")

  //randomArray is currently an empty array, while it remains a value of 0, run this loop.
  while (randomArray.length === 0) {
  
    //if user confirms lowercase, lowercase letters will be added to the randomArray, continuing down the line
    if(window.confirm("Would you like your password to include lowercase letters?")) {
      randomArray = randomArray.concat(lower);
    } if(window.confirm("Would you like your password to include uppercase letters?")) {
      randomArray = randomArray.concat(upper);
    } if(window.confirm("Would you like your password to include symbols?")) {
      randomArray = randomArray.concat(symbols);
    } if(window.confirm("Would you like your password to include numbers?")) {
      randomArray = randomArray.concat(numbers);
    } if(randomArray.length === 0) {
      window.alert("You must select at least one type of character to include in your password.")
    }
  }

  //for loop. password output will be a random output of characters based on user input from lines 31-38.
  for (var i = 0; i < passLength; i++) {
    passwordOutput += randomArray[Math.floor(Math.random() * randomArray.length)];
  } 

  //final step of this function, passwordOutput will be returned.
  return passwordOutput;
} 







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
