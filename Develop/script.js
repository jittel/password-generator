function generatePassword() {
  // todo: list all possible characters
  var available = "";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var special = "0123456789!#$%&()*+,-./:;<=>?@[\]^_`{|}~';";
  // todo: ask for parameters (caps, special characters, etc)
  var yesCaps = confirm("we adding caps?");
  var yesSpecial = confirm("we adding special characters?");
  // todo: show available characters from given params
  if (yesCaps) {
    available += uppercase.concat(lowercase);
  } else if (yesSpecial) {
    available += special.concat(lowercase);
  } else if (yesCaps, yesSpecial) {
    available += lowercase.concat(uppercase, special);
  } else if (!yesCaps, !yesSpecial) {
    alert("you need to pick a parameter. please refresh the page");
  }
  // todo: loop through available characters and generate password
  // todo: return password result
}


// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
