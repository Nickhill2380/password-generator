// Assignment code here

//prompt user for password criteria

//prompt user for length of password between 8 and 128 characters
var passwordLength = function() {
  
  var characterLength = window.prompt("How long does you password need to be?");
  

  characterLength = parseInt(characterLength);

if (characterLength >= 8 && characterLength <= 128) {
  console.log(characterLength);
   
  charLength = characterLength;
  
   
} else {
  window.alert("Please select a correct value.");
  passwordLength();
  
};
return charLength;
};

//prompt character types to include lowercase, uppercase, numeric, and/or special characters
var criteria = function() {
    criteriaSet= "";

var lowercase = window.confirm("Does your password need to include lowercase letters?");
    
    if(lowercase){
      criteriaSet = criteriaSet + "abcdefghijklmnopqrstuvwxyz";
      console.log(criteriaSet);
    };

var uppercase = window.confirm("Does your password need to include uppercase letters?");

    if (uppercase) {
      criteriaSet = criteriaSet +"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log(criteriaSet);
    };
  
var numeric = window.confirm("Does your password need to include numbers?");
   
    if (numeric) {
      criteriaSet = criteriaSet + "0123456789";
      console.log(criteriaSet);
};

var special = window.confirm("Does your password need to include special characters?");

    if (special) {
      criteriaSet = criteriaSet + "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
      console.log(criteriaSet);
    }
   

    if (!special && !numeric && !uppercase && !lowercase) {
      window.alert("You must select some criteria to use.");
      criteria();
    };
    return criteriaSet;
  };
//rerun if user does not select anything

//function that puts password all together
var generatePassword = function() {
  
  password = "";

  for ( var i = 0; i < charLength; i++ ){
    
    password += criteriaSet.charAt(Math.floor(Math.random() * criteriaSet.length));

    console.log(password);
  }
  
  return password;
}



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