const readline = require('readline-sync');
const OPTIONS = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];
const VALID_CHOICES = ['r', 'p', 's', 'l', 'S'];
const WINNING_SCORE = 5;
const WINNING_COMBINATIONS = {
  r: ['s', 'l'],
  p: ['r', 'S'],
  s: ['p', 'l'],
  l: ['S', 'p'],
  S: ['s', 'r'],
};

function prompt(message) {
  console.log(`=> ${message}`);
}

let playerScore = 0;
let computerScore = 0;

console.log(`Welcome to Rock Paper Scissors Lizard Spock`);
prompt(`first to score 5 wins -- Goodluck!\n`);

while (true) {

  prompt(`Choose one: ${OPTIONS.join(', ')}`);
  for (let idx = 0; idx < OPTIONS.length; idx += 1) {
    prompt(`Type ${VALID_CHOICES[idx]} for ${OPTIONS[idx]}`);
  }
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}\n`);

  if (WINNING_COMBINATIONS[choice].includes(computerChoice)) {
    playerScore += 1;
    prompt(`Player scores a point!\n`);
  } else if (choice === computerChoice) {
    prompt(`nobody scores!\n`);
  } else {
    computerScore += 1;
    prompt(`computer scores a point!\n`);
  }

  prompt(`Player:${playerScore} vs Computer:${computerScore}\n`);

  if (playerScore === WINNING_SCORE) {
    prompt(`Player Wins!`);
  } else if (computerScore === WINNING_SCORE) {
    prompt('Sorry you lost try again next time');
  }

  if (playerScore === WINNING_SCORE || computerScore === WINNING_SCORE) break;
}