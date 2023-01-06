// Pseudocode of rock, paper, scissors game
// 1. Create an array with ["rock", "paper", "scissors"]
// 2. Ask how many games a player wants to pay:
//    - if 0, -ve or blank, computer ends the game and statistics for win, lose or draw are 0;
//    - if 1 or more, computer continues.
// 3. User chooses between rock, paper and scissors:
//    - if user does not choose anything, computer wins the current match;
//    - if user chooses 1 of 3 options, computer finds out which option was chosen based on array index.
// 4. Computer generates the random number between 1 and 3
// 5. Print computer's choice and user's choice.
// 6. Use the function with the inputs of the user's number and cumputer's number to print who the winner is.
// 7. Display the result of the game.
// 8. Add to the number of wins, losses and draws depending on the match results:
//    - if the user won, the increment wins,
//    - if the user loses, then increment losses,
//    - if there is a draw, then increment draws.
// 9.  Loops for steps 3-8 until number of games is fulfuilled.
// 10. Display final results.

let cpuChoice = ["rock", "paper", "scissors"];
let gamesNumber = prompt("How many games do you want to play?");
let wins = 0;
let loses = 0;
let draws = 0;

if (gamesNumber === 0 || gamesNumber < 0 || gamesNumber === "") {
  console.log(
    `The results are: wins = ${wins}, loses = ${loses}, draws = ${draws}`
  );
} else {
  console.log(`You chose ${gamesNumber} games.`);
}

for (let index = 0; index < gamesNumber; index++) {
  userChoice = prompt("Choose between rock, paper and scissors.");
  let cpuGuess = cpuChoice[Math.floor(Math.random() * gamesNumber)];

  if (userChoice === "") {
    loses += 1;
    console.log(`You lost! The results are: you ${wins}, computer ${loses}`);
    //how to add +1 round of game in this case to avoid break
    break;
  } else if (
    userChoice == "rock" ||
    userChoice == "paper" ||
    userChoice == "scissors"
  )
    console.log(`You chose ${userChoice}. Computer choice is ${cpuGuess}.`);
  else {
    console.log("Your input is incorrect. Try again.");
  }

  if (userChoice === cpuGuess) {
    draws += 1;
    console.log(
      `You draw with computer. Score is wins = ${wins}, losses = ${loses} and draws = ${draws}.`
    );
  }
  //rock beats scissors, scissors beats paper, paper beats rock
  else if (
    (userChoice === "rock" && cpuGuess === "scissors") ||
    (userChoice === "scissors" && cpuGuess === "paper") ||
    (userChoice === "paper" && cpuGuess === "rock")
  ) {
    wins += 1;
    console.log(
      `You win with computer. Score is wins = ${wins}, losses = ${loses} and draws = ${draws}.`
    );
  } else {
    loses += 1;
    console.log(
      `You lose with computer. Score is wins = ${wins}, losses = ${loses} and draws = ${draws}.`
    );
  }
}

alert(`Your score is wins = ${wins}, losses = ${loses} and draws = ${draws}.`);
