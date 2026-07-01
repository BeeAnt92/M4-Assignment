function displayTitle() {
    alert('The Rock, Paper, Scissors Game');
}

function playGame() {
let playerChoice = ['rock', 'paper', 'scissors'];
let computerChoice = playerChoice[Math.floor(Math.random() * 3)];
let result;

if (computerChoice === 'rock') {
    result = String('rock');
}
if (computerChoice === 'paper') {
    result = String('paper');
}
if (computerChoice === 'scissors') {
    result = String('scissors');
}

    while (true) {
        playerChoice = String(prompt('rock, paper, or scissors?'));
        //Rock//
        if (playerChoice === 'rock') {
            if (computerChoice === 'rock') {
                alert('You Tied')
                break;
            } else if (computerChoice === 'paper') {
                alert('Paper covers rock! You Lose!')
                break;
            } else {
                alert('Rock destroys scissors! You win!')
                break;
            }
        }
        //Paper//
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                alert('Paper covers rock! You win!')
                break;
            } else if (computerChoice === 'paper') {
                alert('You tied!')
                break;
            } else {
                alert('Scissors cut paper! You Lose!')
                break;
            }
        }
        //Scissors//
        if (playerChoice === 'scissors')  {
            if (computerChoice === 'rock') {
                alert('Rock destroys scissors! You lose!')
                break;
            } else if (computerChoice === 'paper') {
                alert('Scissors cut paper! You win!')
                break;
            } else {
                alert('You tied!')
                break;
            }
        }
        //Wrong//
        else (playerChoice !== 'rock', 'paper', 'scissors'); {
                alert('Not a valid option')
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
main()