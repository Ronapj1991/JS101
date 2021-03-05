const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    return 'You Win!';
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
              (choice === 'paper' && computerChoice === 'scissors') ||
              (choice === 'scissors' && computerChoice === 'rock')) {
    return 'Computer Wins!';
  } else {
    return `It's a tie!`;
  }
}

let running = 'yes';

while (running === 'yes') {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();
  choice = choice.toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  prompt(displayWinner(choice, computerChoice));

  prompt(`Do you want to play again (yes/no)?`);
  let answer = readline.question().toLowerCase();
  while (answer !== 'no' && answer !== 'yes') {
    prompt(`Please enter "yes or "no"`);
    answer = readline.question().toLowerCase();
  }

  running = answer;
}