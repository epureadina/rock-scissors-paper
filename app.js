let playerScore = 0;
let computerScore = 0;
let winner = `You win:`;
let loser = `You lose:`;
let tie = `It is a tie`;

function computerPlay() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
  }
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    return tie;
  }
  if (computerSelection == "rock") {
    if (playerSelection == "paper") {
      ++playerScore;
      return winner + ` ${playerSelection} beats ${computerSelection}`;
    } else {
      ++computerScore;
      return loser + `${computerSelection} beats ${playerSelection}`;
    }
  } else if (computerSelection == "paper") {
    if (playerSelection == "rock") {
      ++computerScore;
      return loser + `${computerSelection} beats ${playerSelection}`;
    } else {
      ++playerScore;
      return winner + ` ${playerSelection} beats ${computerSelection}`;
    }
  } else if (computerSelection == "scissors") {
    if (playerSelection == "rock") {
      ++playerScore;
      return winner + ` ${playerSelection} beats ${computerSelection}`;
    } else {
      ++computerScore;
      return loser + `${computerSelection} beats ${playerSelection}`;
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt(
      "Please choose between 'rock', 'paper' and 'scissors':",
      "scissors"
    );
    playerSelection = playerSelection.toLowerCase();
    console.log("Option choosen by player:", playerSelection);
    computerSelection = computerPlay();
    console.log("Option choosen by computer", computerSelection);
    console.log(playRound(computerSelection, playerSelection));
  }
  if (computerScore > playerScore) {
    console.log(
      `The winner is the computer with ${computerScore} points and the loser is the player with ${playerScore}!`
    );
  } else if (computerScore < playerScore) {
    console.log(
      `The winner is the player with ${playerScore} points and the loser is the computer with ${computerScore}`
    );
  } else {
    console.log(`It's a tie! :) ${computerScore} ${playerScore}`);
  }
  console.log("Game over!");
}
