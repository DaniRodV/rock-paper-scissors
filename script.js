let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

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

//Alert the result whenever any party reaches 5 points
function checkWinner () {
    let finalResult;

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            finalResult = `Congratulations! You have bested the machine in ${roundNumber} rounds. Refresh to have another go!`;
        } else {
            finalResult = `Uh oh. The machine has gotten the best of you in ${roundNumber} rounds. Refresh the page to try again.`;
        }

        document.querySelectorAll("#buttons-container button").forEach(button => {
            button.disabled = true;
        });

        const resultsContainer = document.querySelector("#results");
        resultsContainer.textContent = finalResult;
        resultsContainer.style.textAlign = "center";

        const roundCounter = document.querySelector("#round-number");
        roundCounter.textContent = " ";

    }
}

function playRound (humanChoice, computerChoice) {
   //Account for possible results
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
    
    //Show updated scores
    const playerCounter = document.querySelector("#player-counter");
    playerCounter.textContent = `Player: ${humanScore}`;
    const computerCounter = document.querySelector("#computer-counter");
    computerCounter.textContent = `Computer: ${computerScore}`;

    //Show human and computer choices and the result of the previous round
    const resultsContainer = document.querySelector("#results");
    resultsContainer.textContent = " ";

    const choicesContainer = document.createElement("div");
    choicesContainer.classList.add("choices-container")
    resultsContainer.appendChild(choicesContainer);

    const playerChoicePara = document.createElement("p");
    playerChoicePara.textContent = `You chose: ${humanChoice}`;
    choicesContainer.appendChild(playerChoicePara);

    const computerChoicePara = document.createElement("p");
    computerChoicePara.textContent = `Computer chose: ${computerChoice}`;
    choicesContainer.appendChild(computerChoicePara);

    const roundResultPara = document.createElement("p");
    roundResultPara.textContent = roundResult;
    roundResultPara.style.textAlign = "center";
    resultsContainer.appendChild(roundResultPara);

    

    //Show updated round
    roundNumber++;
    const roundCounter = document.querySelector("#round-number");
    roundCounter.textContent = `Round: ${roundNumber}`;

    checkWinner();
}

//Set listeners for each button
let playOptions = document.querySelector("#buttons-container");
playOptions.addEventListener("click", (event) => {
    let target = event.target;
    const computerSelection = getComputerChoice();

    switch (target.id) {
        case "rock-btn":
            playRound("Rock", computerSelection);
            break;
        
        case "paper-btn":
            playRound("Paper", computerSelection);
            break;
        
        case "scissors-btn":
            playRound("Scissors", computerSelection);
            break;
    }
});