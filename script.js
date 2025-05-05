const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let computerChoice = Math.random();

	if (computerChoice <= 1 / 3) {
		computerChoice = 'rock';
	} else if (computerChoice <= 1 / 2) {
		computerChoice = 'paper';
	} else {
		computerChoice = 'scissors';
	}

	return computerChoice;
}

getComputerChoice();

function getHumanChoice() {
	let humanChoice = prompt('Enter your move e.g rock, paper, scissors', '');

	return humanChoice;
}

// getHumanChoice();

function playRound(humanChoice, computerChoice) {
	if (humanChoice == 'rock' && computerChoice == 'paper') {
		console.log(`You lose! Paper beats Rock.`);
		computerScore += 1;
	} else if (humanChoice == 'paper' && computerChoice == 'scissors') {
		console.log('You lose! Scissors beats Paper');
		computerScore += 1;
	} else if (humanChoice == 'scissors' && computerChoice == 'rock') {
		console.log('You lose! Rock beats Scissors');
		computerScore += 1;
	} else if (humanChoice == 'paper' && computerChoice == 'rock') {
		console.log('You win! Paper beats Rock.');
		humanScore += 1;
	} else if (humanChoice == 'scissors' && computerChoice == 'paper') {
		console.log('You win! Scissors beats Paper.');
		humanScore += 1;
	} else if (humanChoice == 'rock' && computerChoice == 'scissors') {
		console.log('You win! Rock beats Scissors.');
		humanScore += 1;
	} else {
		console.log("It's a Tie.");
	}
}

playRound(humanSelection, computerSelection);

console.log(computerScore);
console.log(humanScore);
