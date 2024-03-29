const determineWinner = () => {
  const player1 = prompt(
    "Enter either 'Rock', 'Paper', 'Scissors'"
  ).toLowerCase();

  const player2 = prompt(
    "Enter either 'Rock', 'Paper', 'Scissors'"
  ).toLowerCase();

  if (player1 === player2) {
    alert("It's a draw");
  } else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    alert("player1 wins");
    determineWinner;
    return;
  } else if (
    (player2 === "rock" && player1 === "scissors") ||
    (player2 === "scissors" && player1 === "paper") ||
    (player2 === "paper" && player1 === "rock")
  ) {
    alert("player 2 wins");
  } else {
    alert("Something wrong with your input");
  }
  determineWinner();
};
