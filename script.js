// Assignment Code
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numbersChar = "0123456789";
var specialChar = "!#$%&()*+-/<>?@[\^_{}~=";
var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}

function generatePassword() {
    var password = "";
    var passwordChar = "";
    // password length 
    var passwordLengthUser = prompt("How many characters would you like your password to contain?");
    passwordLengthUser = parseInt(passwordLengthUser);
    if (passwordLengthUser >= 8 && passwordLengthUser <= 128) {} else {
            alert("The password needs to be between 8 and 128 characters.")
        return generatePassword ();
    }
    // How many lowercase characters
    var lowercaseCharacters = confirm("Click OK to Confirm lowercase characters.");
    if (lowercaseCharacters) {
        passwordChar += lowerChar;
    }
    // How many uppercase characters
    var uppercaseCharacters = confirm("Click OK to Confirm uppercase characters.");
    if (uppercaseCharacters) {
        passwordChar += upperChar;
    }
    // How many numbers
    var numbersCharacters = confirm("Click OK to Confirm numbers.");
    if (numbersCharacters) {
        passwordChar += numbersChar;
    }
    // How many special charaters
    var specialCharacters = confirm("Click OK to Confirm speical characters");
    if (specialCharacters) {
        passwordChar += specialChar;
    }
    for (var i = 0; i < passwordLengthUser; i++) {
        password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
    
    }
    return password;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

