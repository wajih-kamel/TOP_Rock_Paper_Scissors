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