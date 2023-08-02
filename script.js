// function getComputerChoice() {
// Declare an array variable choices = ['Rock', 'Paper', 'Scissors'];
// randomly generate a decimal (Math.random) and multiply it by the length of the array
// round down to the nearest integer (Math.floor)
// Use the random number to access the array. 
// }

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  let randomIndex = Math.floor(Math.random() * choices.length);
  console.log(randomIndex);
  return choices[randomIndex];
}

// function playRound(playerSelection, computerSelection) {
//  prompt the user to enter a choice from 'Rock, paper, scissors' in the browser for the 'playerSelection';
//  computerSelection will be acquired by calling 'getComputerChoice()';
//  compare the playerSelection input and the random computerSelection
//  return a result of the round based on the comparison