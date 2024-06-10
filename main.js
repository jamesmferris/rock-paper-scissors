let humanScore = 0;
let computerScore = 0;

for (let round = 1; round <= 5; round++) {
  console.log(`Round ${round}`);

  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);

  console.log("Human score: " + humanScore);
  console.log("Computer score: " + computerScore);
}

console.log("Final Scores:");
console.log("Human score: " + humanScore);
console.log("Computer score: " + computerScore);

if (humanScore > computerScore) {
  console.log("Human wins the game!");
} else if (humanScore < computerScore) {
  console.log("Computer wins the game!");
} else {
  console.log("The game is a tie!");
}

function getHumanChoice() {
  let humanChoice = prompt("Chose Rock, Paper, or Scissors");
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === "rock") {
    console.log("Human chose: Rock");
  } else if (humanChoice === "paper") {
    console.log("Human chose: Paper");
  } else if (humanChoice === "scissors") {
    console.log("Human chose: Scissors");
  } else {
    console.log("Incorrect input received");
  }
  return humanChoice;
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    console.log("Computer chose: Rock");
  } else if (computerChoice === 1) {
    console.log("Computer chose: Paper");
  } else {
    console.log("Computer chose: Scissors");
  }
  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === 1) {
    console.log("Computer wins!");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === 2) {
    console.log("Human wins!");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === 0) {
    console.log("No winner. Round is a tie.");
  } else if (humanChoice === "paper" && computerChoice === 2) {
    console.log("Computer wins!");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === 0) {
    console.log("Human wins!");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === 1) {
    console.log("No winner. Round is a tie.");
  } else if (humanChoice === "scissors" && computerChoice === 1) {
    console.log("Human wins!");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === 0) {
    console.log("Computer wins!");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === 2) {
    console.log("No winner. Round is a tie.");
  }
}
