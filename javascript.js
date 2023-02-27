let cpuChoice;
let cpuScore = 0;
let userChoice;
let userScore = 0;

function play(){
  let i = 0;

    while(i < 5){
      getComputerChoice();
      getUserChoice();
      compare();

      if(userScore > cpuScore){
      alert("you win!");
      i++;
    }
      else if(userScore == cpuScore){
      alert("tie ;-;");
      i++;
    }
      else if(userScore < cpuScore){
      alert("you suck");
      i++;
    }
  }
}
  


function getUserChoice(){
  userChoice = window.prompt("Rock, Paper or Scissors?");
  userChoice = userChoice.toLowerCase()
}

function getComputerChoice(){
let i = generateRandomInteger(1, 3);

  switch(i){
    case 1:
      cpuChoice = "rock";
      break;
    case 2:
      cpuChoice = "paper";
      break;
    case 3:
      cpuChoice = "scissors";
      break;
    default: alert("error");
  }
}

function compare(){
  if(userChoice == "rock"){
  switch(cpuChoice){
    case "scissors":
      userScore++;
      break;
    case "rock":
      break;
    default:
      cpuScore++;
      break;
   }
  }

  if(userChoice == "paper"){
    switch(cpuChoice){
      case "scissors":
        cpuScore++;
        break;
      case "rock":
        userScore++;
        break;
      default:
        break;
     }
    }
  
    if(userChoice == "scissors"){
      switch(cpuChoice){
        case "scissors":
          break;
        case "rock":
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

