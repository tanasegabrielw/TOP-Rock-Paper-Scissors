function getComputerChoice (){

const possibleChoices =['rock','paper','scissors'];
const computerChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];

return computerChoice;

}
console.log(getComputerChoice());