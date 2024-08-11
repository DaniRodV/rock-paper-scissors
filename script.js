// Score variables
let humanScore = 0;
let computerScore = 0;

function displayScores() {
    console.log(`Player score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

displayScores();

function playRound (humanChoice, computerChoice) {
    
    let roundResult;

    if (humanChoice === computerChoice) {
        roundResult = "It's a tie.";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")) {
        roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        roundResult = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    console.log(roundResult);
    return roundResult;
}

function getComputerChoice() {
    // Generate random number between 1 and 3
   const randomNumber = Math.floor(Math.random() * 3) + 1;

   // Determine computer's choice based on the random number
   if (randomNumber === 1) {
    return "rock";
   } else if (randomNumber === 2) {
    return "paper";
   } else {
    return "scissors";
   }
}

function getHumanChoice () {
    //Get human choice
    let playerInput = prompt("Rock, paper, scissors?", "").toLowerCase();

    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
        return playerInput;
    } else {
        alert("Invalid input. Try again.");
        return "Invalid";
    }
}

const humanSelection = getHumanChoice();
console.log(`Player chose: ${humanSelection}`);

const computerSelection = getComputerChoice();
console.log(`Computer chose: ${computerSelection}`);

playRound(humanSelection, computerSelection);

displayScores();