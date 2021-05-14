// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numbericalChar = "0123456789";
var specialChar = "!#$%&()*+-/<=>?@[\^_{|}~";

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    

}

function generatePassword() {
    var password = "";
    var passwordChar = "";

    var passwordLengthUser = prompt("How many characters would you like your password to contain?");
    passwordLengthUser = parseInt(passwordLengthUser);
    if (passwordLengthUser > 8 && passwordLengthUser < 128) {} else {
            alert("The password needs to be between 8 and 128 characters.")
        return generatePassword ();
    }
    var lowercaseCharactersChoice = confirm("Click OK to confirm including lowercse characters.");
    if (lowercaseCharactersChoice) {
        passwordChar += lowercaseChar;
    }

    var uppercaseCharactersChoice = confirm("Click OK to confirm uppercase characters");
    if (uppercaseCharactersChoice) {
        passwordChar += uppercaseChar;
    }
    var numbericalCharactersChoice = confirm("Click Ok to Confirm numbers.");
    if (numbericalCharactersChoice) {
        passwordChar += numbericalChar;
    }
    var specialCharactersChoice = confirm("Click Ok to confirm speical chatacters");
    if (specialCharactersChoice) {
        passwordChar += specialChar;
    }
    for (var i = 0; i < passwordLengthUser; i++) {
        password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
    
    }
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

