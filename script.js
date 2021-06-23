//Score which will increase with our userPlay() function that returns increments.
let userScore = 0;
let computerScore = 0;

function computerPlay(){
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice) //Returns 0, 1, 2
    if (computerChoice === 0) {
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else {
        return "scissors";
    }
}

function userPlay(playerSelection, computerSelection) {
// prompt playerSelection and make it case insensitive
    playerSelection = prompt("Rock, paper or scissors?")
    playerSelection.toLowerCase();
    computerSelection = computerPlay(); 
// Player chooses ROCK
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log( "TIE. You both chose rock!")
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats scissors");
        return userScore++
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Rock loses to paper");
        return computerScore++
// Player chooses PAPER
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("TIE. You both chose paper!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats rock");
        return userScore++
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Paper loses to scissors");
        return computerScore++
// Player chooses SCISSORS
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("TIE. You both chose scissors!");

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats paper");
        return userScore++
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Scissors loses to rock");
        return computerScore++
// Player entered something else
    } else {
        console.log("Please enter rock,paper or scissors!")
    }

}
 
// game() to keep score

function game() {
    alert("Let's play 5 Rock, paper scissors games!")
// Play the game 5 times! Start at iteration 1 
    for (let i = 1; i <= 5; i++) {
        userPlay();
    }
// Started an if loop to count our score which we created at the very top of the script.js
    if (userScore > computerScore) {
        alert("You beat the computer!")
    } else if (userScore < computerScore) {
        alert("The computer beat you :(")
    } else {
        alert("Tie!")
    }

    alert(`The score was ${userScore} wins for you and ${computerScore} wins for the computer and ${5 - (userScore + computerScore)} tied games.`)
}
//Calling it!
game();