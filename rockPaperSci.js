console.log("Hello Kazeem");


function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

function getHumanChoice() {

    let choice;

    const validChoices = ["rock", "paper", "scissors"];
    
    do {
        choice = prompt("Enter your choice (rock, paper or scissors):").toLowerCase();
    } while (!validChoices.includes(choice));

    return choice;
}

function playRound(humanChoice, computerChoice) {

    // This object maps each choice to the option it beats. e.g. rock beats scissors.
    const winningCombinations = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    // Chheck if its a tie
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
        return;
    }

    // Now, we check if human wins
    if (winningCombinations[humanChoice] === computerChoice) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        // otherwise, computer wins
        computerScore++;
        console.log(`You  lose! ${computerChoice} beats ${humanChoice}`);
    }
}

let humanScore = 0;
let computerScore = 0;


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);

