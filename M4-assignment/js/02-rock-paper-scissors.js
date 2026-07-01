function displayTitle() {
    alert('The Rock, Paper, Scissors Game');
}

function playGame() {
    let choice = ['rock', 'paper', 'scissors'];
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];

    while (true) {
        choice = String(prompt('rock, paper, or scissors?'))
        if (choice === 'rock' && computerChoice === 'paper') {
            alert('Paper beats Rock');
            return;
        } else if (choice === 'rock' && computerChoice === 'scissors') {
            alert('Rock beats Scissors');
            return;
        } else if (choice === 'rock' && computerChoice === 'rock') {
            alert('You tied!');
            return;
        }
    }
}

function main() {
    displayTitle();
    let playAgain = 'y';
    while (playAgain === 'y') {
        playGame();
        playAgain = prompt('Do you want to play again? (y or n)');
    }
    alert('Thanks for playing the game!');
}
main();