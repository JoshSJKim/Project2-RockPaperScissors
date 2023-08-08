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

// function playRound(playerSelection, computerSelection) {
//  prompt the user to enter a choice from 'Rock, paper, scissors' in the browser for the 'playerSelection';
//  computerSelection will be acquired by calling 'getComputerChoice()';
//  compare the playerSelection input and the random computerSelection
//  return a result of the round based on the comparison

function playRound(playerSelection, computerSelection) {
  const winMsg = "You win!";
  const loseMsg = "You lose.";
  const drawMsg = "It's a draw.";
  if (playerSelection == computerSelection) {
    console.log(drawMsg);
  } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
    console.log(winMsg);
  } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
    console.log(loseMsg);
  } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
    console.log(loseMsg);
  } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    console.log(winMsg);
  } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
    console.log(loseMsg);
  } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
    console.log(winMsg);
  }
}

let playerSelection = prompt("Rock, paper, or scissors?", "");
let computerSelection = getComputerChoice();
console.log(computerSelection);

playRound(playerSelection, computerSelection);