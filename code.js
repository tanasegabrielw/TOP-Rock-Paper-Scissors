function getComputerChoice (){

const possibleChoices =['rock','paper','scissors'];
const randomChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];

return randomChoice;

}

function playRound() {

const computerSelection = getComputerChoice();
const playerSelection = prompt("Choose Rock paper or scissors:").toLowerCase();
let playerScore =0;
let computerScore =0;
let results=[playerScore,computerScore];

if(playerSelection===computerSelection){

    return 'Tie!';
}

else if((playerSelection==="rock"&&computerSelection==="scissors")||
(playerSelection==="scissors"&&computerSelection==="paper")||
(playerSelection==="paper"&&computerSelection==="rock")){

    playerScore++;
}
else {
    computerScore++;
}

if (playerScore>computerScore) {

    return playerScore;
}
else return computerScore;

}

console.log(playRound());