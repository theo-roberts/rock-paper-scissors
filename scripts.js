
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
        roundResult.textContent = ('no score, you both picked ' + playerChoice)
    }
}

function checkWinner(){
    if (playerScore == 3 || computerScore == 3){
        declareWinner()
        replayButton()
    }
}

function declareWinner() {
    if (playerScore > computerScore){
        const winner = document.querySelector('#winner');
        roundResult.textContent = ("YOU WIN")
        roundResult.style.cssText = ('color: lightgreen; font-size: 54px')
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
        }
    else if (playerScore < computerScore){
        const winner = document.querySelector('#winner');
        roundResult.textContent = ("YOU LOSE")
        roundResult.style.cssText = ('color: red; font-size: 54px')
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
        }
    else (null)
}

function replayButton(){   
    const startAgain = document.querySelector('#startAgain');
    const replayButton = document.createElement('button');
    replayButton.classList.add('replayButton');
    replayButton.textContent = 'replay';
    replayButton.style.cssText = ('background-color: transparent; border-style: solid; border-color: black; border-width: 0.5px; font-family: Courier, monospace;')
    startAgain.appendChild(replayButton);
    replayButton.addEventListener('click', () => location.reload());
}