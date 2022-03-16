// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



var lower = "qwertyuiopasdfghjklzxcvbnm";
var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
var num = "0123456789";
var sym = "~!@#$%^&*?_";
var passwordLength = "";


var initialQuestions = function () {

  var promptLength = prompt(
    "HOW LONG YOU WANT THAT PASSWORD? \r\nMinimum length of 8 and max length 128!"
  );

  if (promptLength <= 128 && promptLength >= 8) {
    alert("YOU ENTERED THE CORRECT AMOUNT");

    var lowercasecheck = confirm("Would you like to include lowercase letters?");
    var uppercasecheck = confirm("Would you like to include uppercase? letters");
    var addnumberscheck = confirm("Would you like to include numbers?");
    var addspecialcheck = confirm("Would you like to include special characters?");
    
    var passwordLength = promptLength;
    console.log(lowercasecheck);
    console.log(uppercasecheck);
    console.log(addnumberscheck);
    console.log(addspecialcheck);
    console.log(passwordLength);
      
  



  } else {
    alert("PASSWORD LENGTH MUST BE 8-128");
    initialQuestions();
  }

};





initialQuestions();

//
// // there are many ways to use the prompt feature
// sign = window.prompt(); // open the blank prompt window
// sign = prompt();       //  open the blank prompt window
// sign = window.prompt('Are you feeling lucky'); // open the window with Text "Are you feeling lucky"
// sign = window.prompt('Are you feeling lucky', 'sure'); // open the window with Text "Are you feeling lucky" and default value "sure

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
