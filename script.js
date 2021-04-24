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


function generatePassword() {
  // when i run this function, i expect to get back a string
  // the string will contain a mix of options
  var userOptions = getUserOptions();

  // combo of musthave and canhave characters
  var passwordArray = [];

  // give us length of the characters
  // based on user options (uppercase, lowercase, numbers)
  var mustHaveCharacters = [];

  // probably depends on length chosen
  // data type: array
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
    return Math.floor(Math.random() * arr.length)
  }

  if (userOptions.upperCaseUserChoice) {
    canHaveCharacters = canHaveCharacters.concat(upperCaseCharactersArray[getRandomFromLength(upperCaseCharactersArray)])
    mustHaveCharacters = mustHaveCharacters.concat(upperCaseCharactersArray[getRandomFromLength(upperCaseCharactersArray)])
  }

  if (userOptions.lowerCaseUserChoice) {
   canHaveCharacters = canHaveCharacters.concat(lowerCaseCharactersArray)
    mustHaveCharacters = mustHaveCharacters.concat(lowerCaseCharactersArray[getRandomFromLength(lowerCaseCharactersArray)])
  }

  if (userOptions.numericCharactersUserChoice) {
    canHaveCharacters = canHaveCharacters.concat(numericCharactersArray)
    mustHaveCharacters = mustHaveCharacters.concat(numericCharactersArray[getRandomFromLength(numericCharactersArray)])
  }

  if (userOptions.specialCharacterUserChoice) {
   canHaveCharacters = canHaveCharacters.concat(specialCharactersArray)
    mustHaveCharacters = mustHaveCharacters.concat(specialCharactersArray[getRandomFromLength(specialCharactersArray)])
  }

  if (!lowerCaseCharactersArray === false,
    !upperCaseCharactersArray === false,
    !numericCharactersArray === false,
    !specialCharactersArray === false) {
    alert('please select one special char group lower/upper/special/numeric')
  }


  for (let i = 0; i < +userOptions.length; i++) {
    passwordArray.push(canHaveCharacters[getRandomFromLength(upperCaseCharactersArray)]);
  
  }

  for (let i = 0; i < mustHaveCharacters.length; i++) {
    passwordArray[i] = mustHaveCharacters[i];
  }
  
return passwordArray;
}
  var generateBtn = document.querySelector("#generate");
      generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}







