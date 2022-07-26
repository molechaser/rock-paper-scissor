const playGame = document.querySelectorAll("#playerSelection button");
const roundResult = document.querySelector("#roundResult");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const resetBtn = document.querySelector("#reset");
const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");

playGame.forEach((button) => {
  button.addEventListener("click", playerPlayRound);
});

let choices = [
  { choice: "Rock", value: 0 },
  { choice: "Paper", value: 1 },
  { choice: "Scissors", value: 2 },
];

function computerPlay() {
  let result = choices[Math.floor(Math.random() * choices.length)];
  return result.choice;
}

function playerPlayRound(e) {
  let computerSelect = computerPlay();

  playerChoice.textContent = e.target.id;
  computerChoice.textContent = computerSelect;
}
