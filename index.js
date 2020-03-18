console.log("Welcome to Rock, Paper, Scissors\n");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

const options = ["rock", "paper", "scissors"];

function handleUserResponse (userResponse) {
    const userChoice = options.indexOf(userResponse.toLowerCase());
    
    if (userChoice < 0) {
        return readline.question("Please choose either Rock, Paper, Scissors\n", handleUserResponse);
    }

    const computerChoice = Math.floor(Math.random() * 3);
    
    if (userChoice === computerChoice) {
        console.log("You drew");
      } else if (userChoice === 0 && computerChoice === 2 || userChoice === 1 && computerChoice === 0 || userChoice === 2 && computerChoice === 1) {
        console.log("You won");
      } else {
        console.log("You lost");
      }

    readline.close();
}

readline.question("Please choose either Rock, Paper, Scissors\n", handleUserResponse);