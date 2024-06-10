// function add7(number) {
//   return number + 7;
// }

// console.log(add7(1));

// function multiply(number1, number2) {
//   return number1 * number2;
// }

// console.log(multiply(2, 3));

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// }

// console.log(capitalize("SoPhIe"));

// function lastLetter(str) {
//   if (typeof str !== "string" || str.length === 0) {
//     return "ERROR";
//   } else {
//     return str.slice(-1);
//   }
// }

// console.log("The last letter is: ", lastLetter("James"));

// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// console.log(answer);

// for (let i = 1; i <= answer; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

function getHumanChoice() {
  let humanChoice = prompt("Chose Rock, Paper, or Scissors");
  if (humanChoice === "Rock") {
    console.log("Human chose: Rock");
  } else if (humanChoice === "Paper") {
    console.log("Human chose: Paper");
  } else if (humanChoice === "Scissors") {
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
  if (humanChoice === "Rock" && computerChoice === 1) {
    console.log("Computer wins!");
    computerScore++;
  } else if (humanChoice === "Rock" && computerChoice === 2) {
    console.log("Human wins!");
    humanScore++;
  } else if (humanChoice === "Rock" && computerChoice === 0) {
    console.log("No winner. Round is a tie.");
  } else if (humanChoice === "Paper" && computerChoice === 2) {
    console.log("Computer wins!");
    computerScore++;
  } else if (humanChoice === "Paper" && computerChoice === 0) {
    console.log("Human wins!");
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === 1) {
    console.log("No winner. Round is a tie.");
  } else if (humanChoice === "Scissors" && computerChoice === 1) {
    console.log("Human wins!");
    humanScore++;
  } else if (humanChoice === "Scissors" && computerChoice === 0) {
    console.log("Computer wins!");
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === 2) {
    console.log("No winner. Round is a tie.");
  }
}

console.log("Human score: " + humanScore);
console.log("Computer score: " + computerScore);
