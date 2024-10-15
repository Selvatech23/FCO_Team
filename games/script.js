// script.js

// Variables to keep score
let playerScore = 0;
let computerScore = 0;

// DOM elements
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

// Function to update the score display
function updateScoreDisplay() {
    scoreElement.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', function() {
    const computerChoice = getComputerChoice();
    const result = determineWinner('Rock', computerChoice);
    resultElement.textContent = `Computer chose ${computerChoice}. ${result}`;
    updateScoreDisplay();
});

document.getElementById('paper').addEventListener('click', function() {
    const computerChoice = getComputerChoice();
    const result = determineWinner('Paper', computerChoice);
    resultElement.textContent = `Computer chose ${computerChoice}. ${result}`;
    updateScoreDisplay();
});

document.getElementById('scissors').addEventListener('click', function() {
    const computerChoice = getComputerChoice();
    const result = determineWinner('Scissors', computerChoice);
    resultElement.textContent = `Computer chose ${computerChoice}. ${result}`;
    updateScoreDisplay();
});
