let cpuChoice;  
let cpuScore = 0;
let userChoice;
let userScore = 0;
let currenWinner = "null";



const btnPlay = document.querySelector('#plays');
btnPlay.addEventListener('click', () => {
  play(); 
});

function play(){
      getComputerChoice();
      compare((getUserChoice), cpuChoice);
  }


function getUserChoice(){
  const btnRock = document.querySelector('#rock');
  const btnPaper = document.querySelector('#paper');
  
  btnRock.addEventListener('click', () => 
  {
    userChoice = "rock";
    return userChoice;
  })
  btnPaper.addEventListener('click', () => 
  {
    userChoice = "paper";
    return userChoice;
  })
  btnScissors.addEventListener('click', () => 
  {
    userChoice = "Scissors";
   return userChoice;
  })


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

function compare(user){
  if (!user == "rock" || "paper" || "scissors")
  {
    alert("ERROR COMPARE");
  }

  if(user == "rock"){
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

  if(user == "paper"){
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
  
    if(user == "scissors"){
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

function winner()
{
if (userScore > cpuScore)
  {
    currenWinner = "You Win";
  }
else {currentWinner = "You Loose"}
}
function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max - min + 1))
  }

