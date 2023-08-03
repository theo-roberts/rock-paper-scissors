
let playerScore = 0;
let computerScore = 0;
const array = ['rock', 'paper', 'scissors'];
let playerChoice = "choice";
let computerChoice = "choice"
let score = ""

function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function delcareWinner() {
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

function playGame(){
    for (let i = 0; i < 5; i++){
        computerChoice = getComputerChoice(array);
        playerChoice = prompt ("type rock, paper or scissors").toLowerCase();
        playRound();
        score = ("You: " + playerScore + " " + "Computer: " + computerScore);
        }
        delcareWinner()    
}

function playRound(){
    if (
        playerChoice == computerChoice)
        alert("Draw")
    
    else if (
        playerChoice == 'rock' && computerChoice == 'scissors' ||
        playerChoice == 'paper' && computerChoice == 'rock' ||
        playerChoice == 'scissors' && computerChoice == 'paper')
        {
        alert ("You Win! " + playerChoice + " beats " + computerChoice + "!")
        ++playerScore
        }
    else if (
        playerChoice == 'rock' && computerChoice == 'paper' ||
        playerChoice == 'paper' && computerChoice == 'scissors' ||
        playerChoice == 'scissors' && computerChoice == 'rock')
        {
        alert ("You Lose :( " + computerChoice + " beats " + playerChoice + "!")
        ++computerScore
        }
}



console.log(playGame(), score)