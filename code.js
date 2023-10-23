let playerScore =0;
let computerScore =0;
const btnPaper = document.querySelector("#btnP");
const btnRock = document.querySelector("#btnR");
const btnScissors = document.querySelector("#btnS");
const scrDisplay = document.querySelector("#scoreDisplay");
const rndDispaly = document.querySelector("#roundDisplay");


let playerSelection;

function getComputerChoice (){

const possibleChoices =['rock','paper','scissors'];
const randomChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];

return randomChoice;

}

function playRound(playerSelection) {
  
const computerSelection = getComputerChoice();

if(playerSelection===computerSelection){
rndDispaly.textContent="TIE!"


}

else if((playerSelection==="rock"&&computerSelection==="scissors")||
(playerSelection==="scissors"&&computerSelection==="paper")||
(playerSelection==="paper"&&computerSelection==="rock")){

    playerScore++;
    rndDispaly.textContent=`Player wins! ${playerSelection} beats ${computerSelection}`;

}

else {
    computerScore++;
    rndDispaly.textContent=`Computer wins! ${computerSelection} beats ${playerSelection}`;

return `You lose! ${computerSelection} beats ${playerSelection}!`
}


}

function game() {

    btnRock.addEventListener("click",() => {
    playerSelection="rock";
    playRound()});
    
    btnPaper.addEventListener("click",() => {
    playerSelection="paper";
    playRound()});
    
    btnScissors.addEventListener("click", () =>{
    playerSelection="scissors";
    playRound()});


if(playerScore===computerScore){

return `Tie Player${playerScore} Computer: ${computerScore}`;

}

else if(playerScore>computerScore){

    return `Player wins ${playerScore} to ${computerScore}`;
}
else if(computerScore>playerScore) {

    return `Computer wins ${computerScore} to ${playerScore}`;
}
}



