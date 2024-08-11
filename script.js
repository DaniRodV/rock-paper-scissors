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