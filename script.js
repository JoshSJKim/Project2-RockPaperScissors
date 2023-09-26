// function getComputerChoice() {
// Declare an array variable choices = ['Rock', 'Paper', 'Scissors'];
// randomly generate a decimal (Math.random) and multiply it by the length of the array
// round down to the nearest integer (Math.floor)
// Use the random number to access the array. 
// }

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const winMsg = "You win!";
const loseMsg = "You lose.";
const drawMsg = "It's a draw.";

let computerWin = 0;
let playerWin = 0;

// function playRound(playerSelection, computerSelection) {
//  prompt the user to enter a choice from 'Rock, paper, scissors' in the browser for the 'playerSelection';
//  computerSelection will be acquired by calling 'getComputerChoice()';
//  compare the playerSelection input and the random computerSelection
//  return a result of the round based on the comparison

function playRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return drawMsg;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return winMsg;
  } else {
    return loseMsg;
  }
}

const bodyElement = document.body;

const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
const rockDiv = document.createElement('div');
rockDiv.appendChild(rockButton);
bodyElement.appendChild(rockDiv);

const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
const paperDiv = document.createElement('div');
paperDiv.appendChild(paperButton);
bodyElement.appendChild(paperDiv);

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
const scissorsDiv = document.createElement('div');
scissorsDiv.appendChild(scissorsButton);
bodyElement.appendChild(scissorsDiv);


/*
function game() {
  
let gameCount = 0;


while (gameCount < 5) {

let playerSelection = prompt("Rock, paper, or scissors?", "");

if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
  alert("Input is invalid. Please check your spelling.");
  continue;
}

let computerSelection = getComputerChoice();
console.log("Your choice: " + playerSelection);
console.log("Computer's choice: " + computerSelection);

const result = playRound(playerSelection, computerSelection);
console.log(result);

gameCount++;

if (result === loseMsg) {
  computerWin++;
} else if (result === winMsg) {
  playerWin++;
} 
}

if (playerWin > computerWin) {
  return "You Win!"
} else if (computerWin > playerWin) {
  return "You lose."
} else {
  return "It's a draw."
}

}

const gameResult = game();
alert("Player win: " + playerWin + ", Computer win: " + computerWin);
alert(gameResult);
*/