
let playerScore = 0;
let computerScore = 0;

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function play(playerSelection) {
    const computerSelection = computerChoice();
    const result = getResult(playerSelection, computerSelection);
    updateScore(result);
    displayResult(playerSelection, computerSelection, result);
}

function getResult(player, computer) {
    if (player === computer) return 'tie';
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
        return 'win';
    }
    return 'lose';
}

function updateScore(result) {
    if (result === 'win') playerScore++;
    if (result === 'lose') computerScore++;
    document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function displayResult(player, computer, result) {
    const resultDiv = document.getElementById('result');
    let message = `You chose ${player}, computer chose ${computer}. `;
    if (result === 'tie') {
        message += "It's a tie!";
    } else if (result === 'win') {
        message += "You win!";
        resultDiv.classList.add('win');
        setTimeout(() => resultDiv.classList.remove('win'), 500);
    } else {
        message += "You lose!";
    }
    resultDiv.textContent = message;
}
