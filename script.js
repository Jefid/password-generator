// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Generate Password Start
function generatePassword() {
  var lower = "qwertyuiopasdfghjklzxcvbnm";
  var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var num = "0123456789";
  var sym = "~!@#$%^&*?_";
  var password = "";

  var passwordLength = prompt(
    "HOW LONG YOU WANT THAT PASSWORD? \r\nMinimum length of 8 and max length 128!"
  );
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);

  if (passwordLength <= 128 && passwordLength >= 8) {
    alert("YOU ENTERED THE CORRECT AMOUNT");

    var lowerCaseCheck = confirm(
      "Would you like to include lowercase letters?"
    );
    var upperCaseCheck = confirm(
      "Would you like to include uppercase? letters"
    );
    var addNumbersCheck = confirm("Would you like to include numbers?");
    var addSpecialCheck = confirm(
      "Would you like to include special characters?"
    );

    console.log(lowerCaseCheck);
    console.log(upperCaseCheck);
    console.log(addNumbersCheck);
    console.log(addSpecialCheck);

    for (i = 0; i < passwordLength; i++) {
      if (password.length < passwordLength) {
        if (lowerCaseCheck) {
          password += lower[Math.floor(Math.random() * lower.length)];
        }
        if (upperCaseCheck) {
          password += upper[Math.floor(Math.random() * upper.length)];
        }
        if (addNumbersCheck) {
          password += num[Math.floor(Math.random() * num.length)];
        }
        if (addSpecialCheck) {
          password += sym[Math.floor(Math.random() * sym.length)];
        }
      } else {
        break;
      }
    }
    return password;
  } else {
    alert("PASSWORD LENGTH MUST BE 8-128");
    return "PLease try again!";
  }
}
