var generateBtn = document.querySelector("#generate");
function getUserOptions() {

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
  var upperCaseCharacters = [
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
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  var specialCharacters = [
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

  var lengthRange = [];
  var userOptions = {
    lowerCaseCharactersArray: lowerCaseCharactersArray,
    upperCaseCharacters: upperCaseCharacters,
    numericCharacters: numericCharacters,
    specialCharacters: specialCharacters,
    lengthRange: lengthRange
  };
  lengthRange = prompt("How long would you like your password to be")
  lengthRange = parseInt(lengthRange);
  // ask for lowercase
  lowerCaseCharactersArray = confirm("would you like to use lower case letters in your password?");
  // ask for uppercase
  upperCaseCharacters = confirm("would you like to use upper case letters in your password?");
  // ask for numeric character
  numericCharacters = confirm("would you like to use numeric characters in your password?");
  // ask for special character
  specialCharacters = confirm("would you like to use special characters in your password?");
  //prompt for length



  return userOptions
}

function lengthRange(inputTxt, minLength, maxLength)
var minLength = '8'
var maxLength = '128'

if (field.minlength < '8' || field.maxlength > '128') {
  alert("please provide a value between " + minlen + " and " + mxlen + " characters")

}

if (!lowerCaseCharactersArray === false,
  !upperCaseCharacters === false,
  !numericCharacters === false,
  !specialCharacters === false) {
  alert('please select one special char group lower/upper/special/numeric')
}
//build options 


function getRandomFromLength(arr) {
  Math.floor(Math.random() * arr.length)
}


function generatePassword() {
  var passwordArray = [];
  var mustHaveCharacters = [];
  var canHaveCharacters = []
  var userOptions = getUserOptions();


  if (userOptions.upperCaseCharacters) {
    canHaveCharacters.concat(upperCaseCharacters)
    mustHaveCharacters.concat(upperCaseCharacters[getRandomFromLength(upperCaseCharacters)])
  }

  if (userOptions.lowerCaseCharactersArray) {
    canHaveCharacters.concat(lowerCaseCharactersArray)
    mustHaveCharacters.concat(lowerCaseCharactersArray[getRandomFromLength(lowerCaseCharactersArray)])
  }

  if (userOptions.numericCharacters) {
    canHaveCharacters.concat(numericCharacters)
    mustHaveCharacters.concat(numericCharacters[getRandomFromLength(numericCharacters)])
  }

  if (userOptions.specialCharacters) {
    canHaveCharacters.concat(specialCharacters)
    mustHaveCharacters.concat(specialCharacters[getRandomFromLength(specialCharacters)])
  }

  for (let currIndx = 0; currIndx < userOptions.lengthChosen; currIndx++); {
    passwordArray.push(canHaveCharacters[getRandomFromLength(upperCaseCharacters)]);
  }

  for (let i = 0; i < mustHaveCharacters.length; i++) {
    password[i] = mustHaveCharacters[i];
  }

  return passwordArray;
}

// Write password to the #password input
function generatePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);