let gameWon = false;

const runGame = () => {
  //run our loop with a 0 index, before it reaches a 4th loop, exit
  for (let i = 0; i < 3; i++) {
    //get the user input using a prompt
    const userInput = prompt(
      "Please enter your rock, paper, scissors guess now"
    );
    //run our primary game logic
    handlePlay(userInput);
    //exit the loop altogether should the gamewon var be set to true
    if (gameWon) break;
  }

  alert("Game Over");
};

//this is our main game handler
const handlePlay = (userInput) => {
  //we know which button has been pressed through the attached id of the butotn
  const id = userInput;
  //generate our number through our created helper function
  const computerOption = generateComputerOption();

  //short circuit the process if a draw - we dont have to check every case, only see whether they are equivalent
  if (id === computerOption) return draw(id);
  //manage if the user picks rock
  if (id === "rock") {
    //win case
    if (computerOption === "scissors") {
      finish(id, computerOption, true);
    }
    //lose case
    if (computerOption === "paper") {
      finish(id, computerOption, false);
    }
    //manage if the user picks paper
  } else if (id === "paper") {
    if (computerOption === "scissors") {
      finish(id, computerOption, false);
    }
    if (computerOption === "rock") {
      finish(id, computerOption, true);
    }
    //manage if user picks scissors - we are using else if for this last one to ensure that we can protect against incorrect id's being passed to the function
  } else if (id === "scissors") {
    if (computerOption === "paper") {
      finish(id, computerOption, true);
    }
    if (computerOption === "rock") {
      finish(id, computerOption, true);
    }
    //handle the edge case of an incorrect id
  } else {
    alert("Something is wrong with the option you picked -" + id);
  }
};

//helper function to generate the computer's options
const generateComputerOption = () => {
  const options = ["rock", "paper", "scissors"];
  //pick a number between 0 and 1 and multiply by the required number and floor it to get rid of the decimal
  const randomInt = Math.floor(Math.random() * 2);
  //return the string that is at the index of our options array to convert the rand number to a more workable format - we could have used just the numbers and this might save a miniscule overhead on computer resources however for code readability best to leave in string format
  return options[randomInt];
};

//helper function to change the inner html for user feedback on win or lose
const finish = (player, computer, winner) => {
  if (winner) {
    gameWon = true;
  }
  //template literal format with a terniary operator to convert winner boolean to correct string
  const finishMessage = `You are the ${
    winner ? "winner" : "loser"
  }.  You guess ${player} and the computer guessed ${computer}`;
  alert(finishMessage);
};
//helper function in the case of a draw.  We can pass either the player option or the computer option as both are the same
const draw = (option) => {
  const finishMessage = `It is a draw, you both picked ${option}`;
  alert(finishMessage);
};
//call our function
runGame();
