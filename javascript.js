function getComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0:
            return 'Rock';
        case 1:
            return 'Papers';
        case 2:
            return 'Scissors';
    }
}

function getHumanChoice(){
    let choice=prompt('Rock, Papers or Scissors?');
    choice=choice.toUpperCase();
    return choice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection==='ROCK' && computerSelection==='Papers'){
        return 'You lost';
    }
    if(playerSelection==='ROCK' && computerSelection==='Rock'){
        return 'Tie';
    }
    if(playerSelection==='ROCK' && computerSelection==='Scissors'){
        return 'You win';
    }
    if(playerSelection==='PAPERS' && computerSelection==='Rock'){
        return 'You win';
    }
    if(playerSelection==='PAPERS' && computerSelection==='Scissors'){
        return 'You lost';
    }
    if(playerSelection==='PAPERS' && computerSelection==='Papers'){
        return 'Tie';
    }
    if(playerSelection==='SCISSORS' && computerSelection==='Rock'){
        return 'You lost';
    }
    if(playerSelection==='SCISSORS' && computerSelection==='Scissors'){
        return 'Tie';
    }
    if(playerSelection==='SCISSORS' && computerSelection==='Papers'){
        return 'You win';
    }
}
let wins=0;
    function playGame(){
    const playerSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log("The computer's choice is " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    let result=playRound(playerSelection, computerSelection);
    if(result==='You win'){
        wins++;
    }
}
for(let i=0;i<5;i++){
    playGame();
}
console.log("The number of times you have won is: "+wins);