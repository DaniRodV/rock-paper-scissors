alert('Press F12 and then click on the Console to view the results of the game. Click "Accept" to start.')

//Function to capitalize the first letter of the return value
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Get the computer choice
//1 = rock, 2 = paper, 3 = scissors
function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

//Get human choice
function getHumanChoice () {
    let humanInput = prompt("Rock, paper, scissors, shoot! What's your move?", "").toLowerCase();

    if (humanInput === "rock" || humanInput === "paper" || humanInput === "scissors") {
        return capitalizeFirstLetter(humanInput);
    } else {
        alert("Your choice is invalid. Please try again.");
        return getHumanChoice();
    }
}

//Function to play five rounds
function playGame() {
    //Declaring score variables
    let humanScore = 0;
    let computerScore = 0;

    //Function to display scores
    function displayScores () {
        console.log(`Your score: ${humanScore}.`);
        console.log(`Computer score: ${computerScore}.`);
    }

    //Single round
    function playRound (humanChoice, computerChoice) {
        let roundResult;

        if (humanChoice === computerChoice) {
            roundResult = `It's a tie. You both chose ${humanChoice}.`;
        } else if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")) {
            roundResult = `You win! ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
        } else {
            roundResult = `You lose. ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        }

        console.log(roundResult);

        displayScores();
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    function checkWinner () {
        if (humanScore > computerScore) {
            alert(`Congratulations, you have won! Refresh the page to try again.`);
        } else if (humanScore < computerScore) {
            alert(`Sorry, you have lost. Refresh the page to try again.`);
        } else {
            alert(`It's a tie! That was a close match. Refresh the page to try again.`);
        }
    }

    return checkWinner();
}

playGame();