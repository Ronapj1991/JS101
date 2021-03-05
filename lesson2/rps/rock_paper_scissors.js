const readline = require('readline-sync');
const OPTIONS = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];
const VALID_CHOICES = ['r', 'p', 's', 'l', 'S'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'r' && (computerChoice === 's' || computerChoice === 'l')) ||
      (choice === 'p' && (computerChoice === 'r' || computerChoice === 'S')) ||
      (choice === 's' && (computerChoice === 'p' || computerChoice === 'l')) ||
      (choice === 'l' && (computerChoice === 'S' || computerChoice === 'p')) ||
      (choice === 'S' && (computerChoice === 's' || computerChoice === 'r'))) {
    return 'Player scores!';
  } else if ((choice === 'r' && (computerChoice === 'p' || computerChoice === 'S')) ||
              (choice === 'p' && (computerChoice === 's' || computerChoice === 'l')) ||
              (choice === 's' && (computerChoice === 'r' || computerChoice === 'S')) ||
              (choice === 'S' && (computerChoice === 'p' || computerChoice === 'l')) ||
              (choice === 'l' && (computerChoice === 's' || computerChoice === 'r'))) {
    return 'Computer Scores!';
  } else {
    return `It's a tie!`;
  }
}

let playerScore = 0;
let computerScore = 0;

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

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  prompt(displayWinner(choice, computerChoice));

  switch (displayWinner(choice, computerChoice)) {
    case 'Player scores!':
      playerScore += 1;
      break;
    case 'Computer Scores!':
      computerScore += 1;
      break;
  }

  prompt(`Player:${playerScore} vs Computer:${computerScore}`);

  if (playerScore === 5 || computerScore === 5) break;
}