function generatePassword() {
  // list all possible characters
  var available = "";
  var result = "";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var special = "0123456789!#$%&()*+,-./:;<=>?@[\]^_`{|}~';";
  // ask for parameters (caps, special characters, etc)
  var yesCaps = confirm("we adding caps?");
  var yesSpecial = confirm("we adding special characters?");
  // show available characters from given params
  if (yesCaps && !yesSpecial) {
    available += lowercase.concat(uppercase);
  } else if (!yesCaps && yesSpecial) {
    available += lowercase.concat(special);
  } else if (yesCaps && yesSpecial) {
    available += lowercase.concat(uppercase, special);
  } else if (!yesCaps, !yesSpecial) {
    alert("you need to pick a parameter. please try again");
    return result;
  }

  // checking for proper pw length
  var length = parseInt(prompt("enter a password length between 8 and 12"));
  if (length > 12) {
    alert("password too long, pick a number between 8 and 12")
  } else if (length < 8) {
    alert("password too short, pick a number between 8 and 12")
  } else if (!Number.isInteger(length)) {
    alert("you need to enter a valid number")
  }

  // console.log(available)
  // console.log(length)

  // loop through available characters and generate password
  for (var i = 0; i < length; i++) {
    result += available.charAt(Math.floor(Math.random() * available.length))
  }
  // return password result
  if (result === undefined) {
    console.log("result is empty")
  } else {
    return result;
  }
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
