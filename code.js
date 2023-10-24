let computerScore=0;
let playerScore =0;
let gameOver =false;

// DOM
const btnPaper = document.querySelector("#btnP");
const btnRock = document.querySelector("#btnR");
const btnScissors = document.querySelector("#btnS");
const scrDisplay = document.querySelector("#scoreDisplay");
const rndDisplay = document.querySelector("#roundDisplay");
const resultDisplay = document.querySelector("#result");
const containerDisplay = document.querySelector(".container");


let playerSelection;

function getComputerChoice (){

const possibleChoices =['rock','paper','scissors'];
const randomChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];

return randomChoice;

}

function playRound(playerSelection) {
  
const computerSelection = getComputerChoice();

if(playerSelection===computerSelection){
    rndDisplay.textContent="TIE!"

}

else if((playerSelection==="rock"&&computerSelection==="scissors")||
(playerSelection==="scissors"&&computerSelection==="paper")||
(playerSelection==="paper"&&computerSelection==="rock")){

  
    rndDisplay.textContent=`Player wins! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
}

else {
    
    rndDisplay.textContent=`Computer wins! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
}

scrDisplay.textContent= `Player: ${playerScore}
Computer: ${computerScore}`;

if(playerScore>=5 || computerScore >=5){ // stops the game when either player reaches score of 5

    endGame();
}
}

btnRock.addEventListener("click",() => {
    playerSelection="rock";
    playRound(playerSelection)}); 
    

btnPaper.addEventListener("click",() => {
    playerSelection="paper";
    playRound(playerSelection)});
    
btnScissors.addEventListener("click", () =>{
    playerSelection="scissors";
    playRound(playerSelection)});

// Styling buttons on click

btnRock.addEventListener("click",function onClick() {
    btnRock.style.backgroundColor = "salmon";
    btnScissors.style.backgroundColor = "#4CAF50";
    btnPaper.style.backgroundColor = "#4CAF50";
    });

btnScissors.addEventListener("click",function onClick() {
    btnScissors.style.backgroundColor = "salmon";
    btnPaper.style.backgroundColor = "#4CAF50";
    btnRock.style.backgroundColor = "#4CAF50";
    });

 btnPaper.addEventListener("click",function onClick() {
    btnPaper.style.backgroundColor = "salmon";
    btnRock.style.backgroundColor = "#4CAF50";
    btnScissors.style.backgroundColor = "#4CAF50";
    });


function endGame() {
    gameOver=true;
    btnPaper.disabled=true;    //
    btnRock.disabled=true;     //
    btnScissors.disabled=true; // in order for the player to not be able to make any more selections

if(playerScore===computerScore){

resultDisplay.textContent=`Tie Player${playerScore} Computer: ${computerScore}`;

}

else if(playerScore>computerScore){

resultDisplay.textContent=`Player wins ${playerScore} to ${computerScore}`;
}
else if(computerScore>playerScore) {

resultDisplay.textContent=`Computer wins ${computerScore} to ${playerScore}`;
}


resetGame();

    }

    function resetGame () {
    const resetBtn = document.createElement('button');
    resetBtn.textContent='Play again!';
    containerDisplay.appendChild(resetBtn);


    resetBtn.addEventListener('click', () =>{
        btnPaper.disabled=false;    
        btnRock.disabled=false;     
        btnScissors.disabled=false;
        computerScore=0;
        playerScore=0;
        gameOver=false;
        rndDisplay.textContent="";
        scrDisplay.textContent= "Player: 0\nComputer: 0";
        resultDisplay.textContent="";
        resetBtn.remove();
        btnPaper.style.backgroundColor = "#4CAF50";
        btnRock.style.backgroundColor = "#4CAF50";
        btnScissors.style.backgroundColor = "#4CAF50";
    });
    
}

