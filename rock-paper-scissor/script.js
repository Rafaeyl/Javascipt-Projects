let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let max = 3;
  let min = 0;
  let result = parseInt(Math.random() * (max - min) + min);

  if (result == 0) {
    return "Rock".toUpperCase();
  }

  if (result == 1) {
    return "Paper".toUpperCase();
  }

  if (result == 2) {
    return "Scissor".toUpperCase();
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, paper, scissor").toUpperCase();

  return choice;
}




function playAround(humanChoice, computerChoice) {

  if (humanChoice == computerChoice) {
    alert(`User\'s Choice: ${humanChoice} \n Computer\'s Choice: ${computerChoice} \n You Tie!`);
  }

  else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
    alert(`User\'s Choice: ${humanChoice} \n Computer\'s Choice: ${computerChoice} \n You Lose!`);
    computerScore = computerScore + 1;
  }

  else if (humanChoice == "ROCK" && computerChoice == "SCISSOR") {
    alert(`User\'s Choice: ${humanChoice} \n Computer\'s Choice: ${computerChoice} \n You Win!`);
    humanScore = humanScore + 1;
  }

  else if (humanChoice == "PAPER" && computerChoice == "SCISSOR") {
    alert(`User\'s Choice: ${humanChoice} \n Computer\'s Choice: ${computerChoice} \n You lOSE!`);
    computerScore = computerScore + 1;
  }

  else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
    alert(`User\'s Choice: ${humanChoice} \n Computer\'s Choice: ${computerChoice} \n You WIN!`);
    humanScore = humanScore + 1;
  }

  else if (humanChoice == "SCISSOR" && computerChoice == "ROCK") {
    alert(`User\'s Choice: ${humanChoice} \n Computer\'s Choice: ${computerChoice} \n You LOSE!`);
    computerScore = computerScore + 1;
  }

  else if (humanChoice == "SCISSOR" && computerChoice == "PAPER") {
    alert(`User\'s Choice: ${humanChoice} \n Computer\'s Choice: ${computerChoice} \n You WIN!`);
    humanScore = humanScore + 1;
  }

  else{
    alert("Invalid Input Try again");
  }

    alert(`Human Score ${humanScore} \t\t Computer Score ${computerScore}`)


}



function playGame(){
    playAround(getHumanChoice(),getComputerChoice());
    playAround(getHumanChoice(),getComputerChoice());
    playAround(getHumanChoice(),getComputerChoice());
    playAround(getHumanChoice(),getComputerChoice());
    playAround(getHumanChoice(),getComputerChoice());
}


playGame();