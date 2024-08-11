let humanScore = 0;
let computerScore = 0;

function displayScores () {
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

displayScores();

function playRound (humanChoice, computerChoice) {
    let roundResult;

    if (humanChoice === computerChoice) {
        roundResult = `It's a tie.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        roundResult = `You lose! ${computerChoice} beats ${computerChoice}`;
        computerScore++;
    }

    console.log(roundResult);
    return roundResult;

}

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random()* 3) + 1;

    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice () {
    const humanInput = prompt("Rock, paper or scissors?", "").toLowerCase();

    if (humanInput === "rock" || humanInput === "paper" || humanInput === "scissors") {
        return humanInput;
    } else {
        alert("Invalid input. Try again with one of the three options given.");
        return "Invalid.";
    }
}

const humanSelection = getHumanChoice();
console.log(humanSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);

playRound(humanSelection, computerSelection);

displayScores();