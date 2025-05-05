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

console.log(getComputerChoice());
