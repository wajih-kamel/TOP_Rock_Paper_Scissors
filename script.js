function getComputerChoice(){
    let intChoice=(Math.floor(Math.random()*3));
    let choice;

    (intChoice==0) ? choice="Rock" :
    (intChoice==1) ? choice="Paper" :
    choice="Scissors";

    return choice.toLocaleLowerCase();
}

function getHumanChoice(){

    let choice=prompt("enter your choice between 'Rock', 'Paper' or 'Scissors' ");
    return choice.toLowerCase();

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
    
    let intComputerChoice=choiceToInt(ComputerChoice);
    let intHumanChoice=choiceToInt(HumanChoice);

    
    (intComputerChoice==intHumanChoice) ? alert("no body won this round !"):
    ( (intComputerChoice-intHumanChoice)<0 && (intComputerChoice-intHumanChoice)==-1 ) ?  (alert("computer chose '"+ComputerChoice+"' computer won this round !"), computerScore+=1):
    ( (intComputerChoice-intHumanChoice)>0 && (intComputerChoice-intHumanChoice)!=1 ) ? (alert("computer chose '"+ComputerChoice+"' computer won this round !"), computerScore+=1):
                                                                                        (alert("computer chose '"+ComputerChoice+"' you won this round !"), humanScore+=1);

}