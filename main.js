let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

let humanScoreEl = document.getElementById("human-score");
let computerScoreEl = document.getElementById("computer-score");
let gameMessageEl = document.getElementById("game-message");
let finalGameMessageEl = document.getElementById("final-game-message");
let roundEl = document.getElementById("round-El");
let restartBtn = document.getElementById("restart-btn");
let winnerGifEl = document.getElementById("winner-gif");

document.getElementById("rock-btn").addEventListener("click", () => handlePlayerChoice("rock"));
document.getElementById("paper-btn").addEventListener("click", () => handlePlayerChoice("paper"));
document.getElementById("scissors-btn").addEventListener("click", () => handlePlayerChoice("scissors"));
restartBtn.addEventListener("click", restartGame);

function handlePlayerChoice(humanChoice) {
  if (roundsPlayed >= 5) {
    finalGameMessageEl.textContent = "Game over! Click the button below to play again!";
    return;
  }

  roundsPlayed++;
  roundEl.textContent = `Round: ${roundsPlayed}`;

  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);

  humanScoreEl.textContent = humanScore;
  computerScoreEl.textContent = computerScore;

  if (roundsPlayed === 5) {
    if (humanScore > computerScore) {
      finalGameMessageEl.textContent = `Human wins the game! Final score: ${humanScore} (Human) to ${computerScore} (Computer)`;
      humanScoreEl.classList.add("winning-score");
      winnerGifEl.src = "../gifs/humanWins.gif"; // Updates with path the human wins GIF
    } else if (humanScore < computerScore) {
      finalGameMessageEl.textContent = `Computer wins the game! Final score: ${computerScore} (Computer) to ${humanScore} (Human)`;
      computerScoreEl.classList.add("winning-score");
      winnerGifEl.src = "../gifs/computerWins.gif"; // Updates with path to computer wins GIF
    } else {
      finalGameMessageEl.textContent = "The game is a tie!";
      winnerGifEl.src = "../gifs/tieGame.gif"; // Updates with path to tie game GIF
    }
    winnerGifEl.style.display = "block"; // Show the winner GIF
    restartBtn.style.display = "block"; // Show the restart button
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
    gameMessageEl.textContent = `No winner. Round ${roundsPlayed} is a tie. Computer chose ${computerChoice}.`;
  } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
    gameMessageEl.textContent = `Human wins round ${roundsPlayed}! Computer chose ${computerChoice}.`;
    humanScore++;
  } else {
    gameMessageEl.textContent = `Computer wins round ${roundsPlayed}! Computer chose ${computerChoice}.`;
    computerScore++;
  }
}

function restartGame() {
  humanScore = 0;
  computerScore = 0;
  roundsPlayed = 0;

  humanScoreEl.textContent = humanScore;
  computerScoreEl.textContent = computerScore;
  gameMessageEl.textContent = "New game! Make your selection!";
  finalGameMessageEl.textContent = "";
  roundEl.textContent = "";

  restartBtn.style.display = "none";
  winnerGifEl.style.display = "none";
  humanScoreEl.classList.remove("winning-score");
  computerScoreEl.classList.remove("winning-score");
}
