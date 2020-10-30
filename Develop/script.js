// Assignment code here

//prompt user for password criteria

//prompt user for length of password between 8 and 128 characters
var passwordLength = function() {

  var characterLength = window.prompt("How long does you password need to be?");

  characterLength = parseInt(characterLength);

if (characterLength >= 8 && characterLength <= 128) {
   return characterLength;
} else {
  window.alert("Please select a correct value.");
  passwordLength();
  
};
};

//prompt character types to include lowercase, uppercase, numeric, and/or special characters
var criteria = function() {
var lowercase = window.confirm("Does your password need to include lowercase letters?");

    if (lowercase){
      return lowercase;
    }
var uppercase = window.confirm("Does your password need to include uppercase letters?");
    if (uppercase){
      return uppercase;
    }

var numeric = window.confirm("Does your password need to include numbers?");
    if (numeric) {
      return numeric;
    }

var special = window.confirm("Does your password need to include special characters?");
    if(special) {
      return special;
    }

    if (!special && !numeric && !uppercase && !lowercase) {
      window.alert("You must select some criteria to use.");
      criteria();
    };
  };
//rerun if user does not select anything




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


passwordLength();
criteria();