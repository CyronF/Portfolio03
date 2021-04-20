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
var numericCharactersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

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

function getUserOptions() {


  var lengthRanges = prompt("How long would you like your password to be");
  lengthRanges = parseInt(lengthRanges);
  // ask for lowercase
  var lowerCaseUserChoice = confirm("would you like to use lower case letters in your password?");
  // ask for uppercase
  var upperCaseUserChoice = confirm("would you like to use upper case letters in your password?");
  // ask for numeric character
  var numericCharactersUserChoice = confirm("would you like to use numeric characters in your password?");
  // ask for special character
  var specialCharacterUserChoice = confirm("would you like to use special characters in your password?");
  //prompt for length

  var userOptions = {
    lowerCaseUserChoice: lowerCaseUserChoice,
    upperCaseUserChoice: upperCaseUserChoice,
    numericCharactersUserChoice: numericCharactersUserChoice,
    specialCharacterUserChoice: specialCharacterUserChoice,
    lengthRanges: lengthRanges
  };
return userOptions
}

function lengthRanges(inputTxt, minLength, maxLength) {
var minLength = '8'
var maxLength = '128'
}

//if (field.minlength < '8' || field.maxlength > '128') {
  //alert("please provide a value between " + minlen + " and " + mxlen + " characters")

//}

// if (!lowerCaseCharactersArray === false,
//   !upperCaseCharactersArray === false,
//   !numericCharactersArray === false,
//   !specialCharactersArray === false) {
//   alert('please select one special char group lower/upper/special/numeric')
//}
//build options 


function getRandomFromLength(arr) {
  Math.floor(Math.random() * arr.length)
}


function generatePassword() {
  var passwordArray = [];
  var mustHaveCharacters = [];
  var canHaveCharacters = []
  var userOptions = getUserOptions();
console.log("userOptions",userOptions)

  if (userOptions.upperCaseCharactersArray) {
    canHaveCharacters.concat(upperCaseCharactersArray)
    mustHaveCharacters.concat(upperCaseCharactersArray[getRandomFromLength(upperCaseCharactersArray)])
  }

  if (userOptions.lowerCaseCharactersArray) {
    canHaveCharacters.concat(lowerCaseCharactersArray)
    mustHaveCharacters.concat(lowerCaseCharactersArray[getRandomFromLength(lowerCaseCharactersArray)])
  }

  if (userOptions.numericCharactersArray) {
    canHaveCharacters.concat(numericCharactersArray)
    mustHaveCharacters.concat(numericCharactersArray[getRandomFromLength(numericCharactersArray)])
  }

  if (userOptions.specialCharactersArray) {
    canHaveCharacters.concat(specialCharactersArray)
    mustHaveCharacters.concat(specialCharactersArray[getRandomFromLength(specialCharactersArray)])
  }

  for (let currIndx = 0; currIndx < userOptions.lengthChosen; currIndx++); {
    passwordArray.push(canHaveCharacters[getRandomFromLength(upperCaseCharactersArray)]);
  }

  for (let i = 0; i < mustHaveCharacters.length; i++) {
    password[i] = mustHaveCharacters[i];
  }

  return passwordArray;
}

// Write password to the #password input
// function generatePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);