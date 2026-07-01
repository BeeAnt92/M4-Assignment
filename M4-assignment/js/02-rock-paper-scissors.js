function displayTitle() {
    alert('The Rock, Paper, Scissors Game');
}

function playGame() {
let playerChoice = ['rock', 'paper', 'scissors'];
let computerChoice = playerChoice[Math.floor(Math.random() * 3)];
let result;

if (computerChoice === 0) {
    result = String('rock');
}
if (computerChoice === 1) {
    result = String('paper');
}
if (computerChoice === 2) {
    result = String('scissors');
}

    while (true) {
        playerChoice = String(prompt('rock, paper, or scissors?'));
        //Rock//
        if (playerChoice === 'rock' && computerChoice === 'rock') {
            alert('You tied!');            
        } else if (playerChoice === 'rock' && computerChoice === 'paper') {
            alert('Paper covers rock! Computer wins!');            
        } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
            alert('Rock destroys Scissors! You Win!');
        } 
        //Paper//
        if (playerChoice === 'paper' && computerChoice === 'rock') {
            alert('Paper covers rock! You Win!');            
        } else if (playerChoice === 'paper' && computerChoice === 'paper') {
            alert('You tied!');
        } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
            alert('Scissors cut paper! You lose!');
        } 
        //Scissors//
        if (playerChoice === 'scissors' && computerChoice === 'rock') {
            alert('Rock destroys scissors! You lose!');
        } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
            alert('Scissors cut paper! You win!');
        } else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
            alert('You tied!');
        } 
        //Wrong//
    }
    while (false) {
        if (playerChoice !== 'rock', 'paper', 'scissors') {
            alert('Not a valid option');
            return;
        }
    }
}

function main() {
    displayTitle();
    let playAgain = 'y';
    while (playAgain === 'y') {
        playGame();
        playAgain = prompt('Do you want to play again? (y or n)', 'y');
    }
    alert('Thanks for playing the game!');
}
main();