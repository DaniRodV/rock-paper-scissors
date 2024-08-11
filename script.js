// Score variables
let humanScore = 0;
let computerScore = 0;

console.log(`Player score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);

function playRound (humanChoice, computerChoice) {
    
    let roundResult;

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                roundResult = "You win! Rock beats scissors.";
                humanScore++;
            } else if (computerChoice === "paper") {
                roundResult = "You lose! Paper beats rock.";
                computerScore++;
            } else {
                roundResult = "It's a tie.";
            }

            break;
        
        case "paper":
            if (computerChoice === "rock") {
                roundResult = "You win! Paper beats rock.";
                humanScore++;
            } else if (computerChoice === "scissors") {
                roundResult = "You lose! Scissors beat paper."
                computerScore++;
            } else {
                roundResult = "It's a tie."
            }

            break;
        
        case "scissors":
            if (computerChoice === "paper") {
                roundResult = "You win! Scissors beat paper.";
                humanScore++;
            } else if (computerChoice === "rock") {
                roundResult = "You lose! Rock beats scissors."
                computerScore++;
            } else {
                roundResult = "It's a tie."
            }

            break;

        default:
            roundResult = "Invalid choice.";
    }

    console.log(roundResult);
    return roundResult;
}

const humanSelection = getHumanChoice();
console.log(`Player chose: ${humanSelection}`);

const computerSelection = getComputerChoice();
console.log(`Computer chose: ${computerSelection}`);

playRound(humanSelection, computerSelection);

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