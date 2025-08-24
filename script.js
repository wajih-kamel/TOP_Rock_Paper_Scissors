function getComputerChoice(){
    let intChoice=(Math.floor(Math.random()*3));
    let choice;

    (intChoice==0) ? choice="Rock" :
    (intChoice==1) ? choice="Paper" :
    choice="Scissors";

    return choice.toLocaleLowerCase();
}


function choiceToInt(choice){
    let result= 
    (choice=="paper") ? () => Number(0) :
    (choice=="rock") ? () => Number(1) :
    () => Number(2);
    
    return result();
}

function playRound(ComputerChoice,HumanChoice)
{
    
    if(round==5){
        
        const gameTrack= document.querySelector(".gameTrack")
        gameTrack.classList.add("gameTrackStyle")
        if(humanScore>computerScore)message="game finished , congrats champ you won 🎉 !"
        else if(humanScore<computerScore)message="game finished , you lost hard luck next time 👏 !"
        else message="game finished , no body won 🟰 !"
        return
    }
    let intComputerChoice=choiceToInt(ComputerChoice);
    let intHumanChoice=choiceToInt(HumanChoice);

    
    if (intComputerChoice == intHumanChoice) {
        message = "no body won this round 🔃!";
    } 
    else if ((intComputerChoice - intHumanChoice) < 0 && (intComputerChoice - intHumanChoice) == -1) {
        message = "computer chose '" + ComputerChoice + "' computer won this round ❌ !";
        computerScore += 1;
    } 
    else if ((intComputerChoice - intHumanChoice) > 0 && (intComputerChoice - intHumanChoice) != 1) {
        message = "computer chose '" + ComputerChoice + "' computer won this round ❌ !";
        computerScore += 1;
    } 
    else {
        message = "computer chose '" + ComputerChoice + "' you won this round ✅🔥 !";
        humanScore += 1;
    }

    round++
    
   

}

function playGame(){

    const gameTrack= document.querySelector(".gameTrack")
    const gameChoices=document.querySelector(".gameChoicesContainer")
    const humanScoreboard=document.querySelector("#humanScoreboard")
    const computerScoreboard=document.querySelector("#computerScoreboard")
    const roundScoreboard=document.querySelector("#roundScoreboard")
    
    const resetButton=document.querySelector(".resetButton")

    gameChoices.addEventListener("click",(e)=>{

        if (e.target.id=="rock")playRound(getComputerChoice(),"rock")
        if (e.target.id=="paper")playRound(getComputerChoice(),"paper")
        if (e.target.id=="scissors")playRound(getComputerChoice(),"scissors")

        gameTrack.textContent=message
        humanScoreboard.textContent=`You: ${humanScore}`
        computerScoreboard.textContent=`Computer: ${computerScore}`
        roundScoreboard.textContent=`Round: ${round}/5`

    })

    resetButton.addEventListener("click",()=>{

        message="Select your choice to begin !";
        humanScore=0;
        computerScore=0;
        round=0;
        gameTrack.classList.remove("gameTrackStyle")
        gameTrack.textContent=message
        humanScoreboard.textContent=`You: ${humanScore}`
        computerScoreboard.textContent=`Computer: ${computerScore}`
        roundScoreboard.textContent=`Round: ${round}/5`

    })

}

let message;
let humanScore=0;
let computerScore=0;
let round=0;


playGame()

