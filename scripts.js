
let playerScore = 0;
let computerScore = 0;
const array = ['rock', 'paper', 'scissors'];
let playerChoice = "choice";
let computerChoice = "choice"

function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

computerChoice = getComputerChoice(array);
playerChoice = prompt ("type rock, paper or scissors").toLowerCase();

function playRound(){
    if (playerChoice == computerChoice){
        return("It's a Draw!")
    }
    if (
        (playerChoice == 'rock' && computerChoice == 'scissors' ||
        playerChoice == 'paper' && computerChoice == 'rock' ||
        playerChoice == 'scissors' && computerChoice == 'paper')
    ){
        playerScore = playerScore +1
        return ("You Win! " + playerChoice + " beats " + computerChoice + "!")
    }
    if (
        (playerChoice == 'rock' && computerChoice == 'paper' ||
        playerChoice == 'paper' && computerChoice == 'scissors' ||
        playerChoice == 'scissors' && computerChoice == 'rock')
    ){
        computerScore = computerScore + 1
        return("You Lose :( " + computerChoice + " beats " + playerChoice + "!")
    }
}


console.log(playRound(), playerScore, computerScore)