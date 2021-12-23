// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","]","}","|","/",":",";","<",",",">",".","?"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]


function generatePassword() {
  window.confirm("Would you like me to create a password for you?");
  var passLength = window.prompt("How many characters would you like your password to be? You must choose a number between 8 and 128");
  alert ("You said " + passLength + " characters.");
  var lowerConfirm = confirm("Would you like your password to contain lowercase letters?") 
  var upperConfirm = confirm("Would you like your password to contain uppercase letters?") 
  var symbolsConfirm = confirm("Would you like your password to contain symbols?") 
  var numberssConfirm = confirm("Would you like your password to contain numbers?") 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
