let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

let humanScoreEl = document.getElementById("human-score");
let computerScoreEl = document.getElementById("computer-score");
let gameMessageEl = document.getElementById("game-message");
let finalGameMessageEl = document.getElementById("final-game-message");

document.getElementById("rock-btn").addEventListener("click", () => handlePlayerChoice("rock"));
document.getElementById("paper-btn").addEventListener("click", () => handlePlayerChoice("paper"));
document.getElementById("scissors-btn").addEventListener("click", () => handlePlayerChoice("scissors"));

function handlePlayerChoice(humanChoice) {
  if (roundsPlayed >= 5) {
    finalGameMessageEl.textContent = "Game over! Refresh the page to play again!";
    return;
  }

  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);

  roundsPlayed++;

  humanScoreEl.textContent = humanScore;
  computerScoreEl.textContent = computerScore;

  if (roundsPlayed === 5) {
    if (humanScore > computerScore) {
      finalGameMessageEl.textContent = `Human wins the game!
      Final score: ${humanScore} (Human) to ${computerScore} (Computer)`;
    } else if (humanScore < computerScore) {
      finalGameMessageEl.textContent = `Computer wins the game!
      Final score: ${computerScore} (Computer) to ${humanScore} (Human)`;
    } else {
      finalGameMessageEl.textContent = "The game is a tie!";
    }
  }
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random() * 3);
  let choice = choices[computerChoice];
  console.log(`Computer chose: ${choice}`);
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    gameMessageEl.textContent = "No winner. Round is a tie.";
  } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
    gameMessageEl.textContent = "Human wins this round!";
    humanScore++;
  } else {
    gameMessageEl.textContent = "Computer wins this round!";
    computerScore++;
  }
}
