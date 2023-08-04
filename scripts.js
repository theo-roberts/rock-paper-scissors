
let playerScore = 0;
let computerScore = 0;
const array = ['rock', 'paper', 'scissors'];
let playerChoice = 'choice';
let computerChoice = 'choice';
let winner = "";

document.getElementById("rock").addEventListener('click', function(){
    computerChoice = getComputerChoice(array);
    playerChoice = 'rock'
    console.log(playerChoice)
    console.log(computerChoice)
    playRound(playerChoice, computerChoice)
    updateScore()
    whoWon()
    checkWinner()
    console.log(playerScore, computerScore);
});
document.getElementById("paper").addEventListener('click', function(){
    computerChoice = getComputerChoice(array);
    playerChoice = 'paper'
    console.log(playerChoice)
    console.log(computerChoice)
    playRound(playerChoice, computerChoice)
    updateScore()
    whoWon()
    checkWinner()
    console.log(playerScore, computerScore);
});
document.getElementById("scissors").addEventListener('click', function(){
    computerChoice = getComputerChoice(array);
    playerChoice = 'scissors'
    console.log(playerChoice)
    console.log(computerChoice)
    playRound(playerChoice, computerChoice)
    updateScore()
    whoWon()
    checkWinner()
    console.log(playerScore, computerScore);
});

function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
};

function playRound(playerChoice, computerChoice){
    if (
        playerChoice == 'rock' && computerChoice == 'scissors' ||
        playerChoice == 'paper' && computerChoice == 'rock' ||
        playerChoice == 'scissors' && computerChoice == 'paper'){
            ++playerScore;
            winner = 'player'
        }
    else if (
        playerChoice == 'rock' && computerChoice == 'paper' ||
        playerChoice == 'paper' && computerChoice == 'scissors' ||
        playerChoice == 'scissors' && computerChoice == 'rock'){
            ++computerScore;
            winner = 'computer'
        }
    else if (playerChoice == computerChoice){
            winner = 'draw'
    }
};

function updateScore(){
    const player = document.querySelector('#score1');
    player.textContent = (playerScore)

    const computer = document.querySelector('#score2');
    computer.textContent = (computerScore)
}

function whoWon(){
    if (winner == 'player'){
        const roundResult = document.querySelector('#roundResult');
        roundResult.textContent = (playerChoice + " beats " + computerChoice)
    }
    else if (winner == 'computer'){
        const roundResult = document.querySelector('#roundResult');
        roundResult.textContent = (computerChoice + " beats " + playerChoice)
    }
    else if (winner == 'draw'){
        const roundResult = document.querySelector('#roundResult');
        roundResult.textContent = 'It\'s a draw! You both picked the same one!'
    }
}

function checkWinner(){
    if (playerScore == 3 || computerScore == 3){
        declareWinner()
    }
}

function declareWinner() {
    if (playerScore == computerScore){
        alert ("It's a Draw!!!")
        }
    else if (playerScore > computerScore){
        alert ("You Win!!!!!")
        }
    else if (playerScore < computerScore){
         alert ("Computer Wins :(")
        }
}

const reset = document.querySelector('#reset')
reset.addEventListener('click', () => location.reload())
