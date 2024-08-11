let humanScore = 0;
let computerScore = 0;

console.log(`Player score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);

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

const computerChoice = getComputerChoice();
console.log(`Computer chose: ${computerChoice}`);

function getHumanChoice () {
    //Get human choice
    let playerInput = prompt("Rock, paper, scissors?", "").toLowerCase();

    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
        return playerInput;
    } else {
        alert("Invalid input. Try again.")
        return "Invalid";
    }
}

let humanChoice = getHumanChoice();
console.log(`Player chose: ${humanChoice}`);