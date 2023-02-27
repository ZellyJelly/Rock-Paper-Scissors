let cpuChoice;
let cpuScore;
let userChoice;
let userScore;

function play(){
  getComputerChoice();
  getUserChoice();
  compare();

  if(userScore > cpuScore){
    alert("you win!");
  }
  else if(userScore == cpuScore){
    alert("tie ;-;");
  }
  else if(userScore < cpuScore){
    alert("you suck");
  }
  
}
  


function getUserChoice(){
  userChoice = (toLowercase(window.prompt("Rock, Paper or Scissors?")));
}

function getComputerChoice(){
let i = generateRandomInteger(1, 3);

  switch(i == true){
    case 1:
      cpuChoice = Rock;
      break;
    case 2:
      cpuChoice = Paper;
      break;
    case 3:
      cpuChoice = Scissors;
      break;
    default: error;
  }
}

function compare(){
  if(userChoice == "rock"){
  switch(cpuChoice){
    case scissors:
      userScore++;
      break;
    case rock:
      break;
    default:
      cpuScore++;
      break;
   }
  }

  if(userChoice == "paper"){
    switch(cpuChoice){
      case scissors:
        cpuScore++;
        break;
      case rock:
        playerScore++;
        break;
      default:
        break;
     }
    }
  
    if(userChoice == "scissors"){
      switch(cpuChoice){
        case scissors:
          break;
        case rock:
          cpuScore++;
          break;
        default:
          playerScore++;
          break;
       }
      }
}

function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max - min + 1))
  }

