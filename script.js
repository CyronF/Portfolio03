 var lowerCaseCharactersArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var upperCaseCharactersArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var numericCharactersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharactersArray = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];


var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
 var userOptions = getUserOptions(); 

 var passwordArray = [];

 var mustHaveCharacters = [];

 var canHaveCharacters = [];

function getUserOptions() {
  var length = Number(prompt("How many characters would you like your password to be?"));
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Password length must be 8-128 characters."))
  
  var lowerCaseUserChoice = confirm("would you like to use lower case letters in your password?");
  
  var upperCaseUserChoice = confirm("would you like to use upper case letters in your password?");
  
  var numericCharactersUserChoice = confirm("would you like to use numeric characters in your password?");
  
  var specialCharacterUserChoice = confirm("would you like to use special characters in your password?");
  
  var userOptions = {
    lowerCaseUserChoice: lowerCaseUserChoice,
    upperCaseUserChoice: upperCaseUserChoice,
    numericCharactersUserChoice: numericCharactersUserChoice,
    specialCharacterUserChoice: specialCharacterUserChoice,
    length: length
  }

return userOptions;
}

function getRandomFromLength(arr) {
  return Math.floor(Math.random() *arr.length)
  }

  if (userOptions.upperCaseUserChoice) {
    canHaveCharacters.concat(upperCaseCharactersArray)
    mustHaveCharacters.concat(upperCaseCharactersArray[getRandomFromLength(upperCaseCharactersArray)])
  }

  if (userOptions.lowerCaseUserChoice) {
    canHaveCharacters.concat(lowerCaseCharactersArray)
    mustHaveCharacters.concat(lowerCaseCharactersArray[getRandomFromLength(lowerCaseCharactersArray)])
  }

  if (userOptions.numericCharactersUserChoice) {
    canHaveCharacters.concat(numericCharactersArray)
    mustHaveCharacters.concat(numericCharactersArray[getRandomFromLength(numericCharactersArray)])
  }
  
  if (userOptions.specialCharacterUserChoice) {
    canHaveCharacters.concat(specialCharactersArray)
    mustHaveCharacters.concat(specialCharactersArray[getRandomFromLength(specialCharactersArray)])
  }

  if (!lowerCaseCharactersArray === false,
   !upperCaseCharactersArray === false,
   !numericCharactersArray === false,
   !specialCharactersArray === false) {
     alert('please select one special char group lower/upper/special/numeric')
   }
   
  for (let currIndx = 0; currIndx < userOptions.length; currIndx++); {
    passwordArray.push(canHaveCharacters[getRandomFromLength(upperCaseCharactersArray)]);
   }
   
  for (let i = 0; i < mustHaveCharacters.length; i++) {
     password[i] = mustHaveCharacters[i];
  } 
  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

return password;

}

generateBtn.addEventListener("click", writePassword);


  