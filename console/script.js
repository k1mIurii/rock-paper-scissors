function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "rock";
    } else if (random === 1) {
        return "paper";
    } else {
        return "scissors";
    }

}

function getHumanChoice() {
    let input = prompt("rock,paper,scissors?")
    if (input === '') {
        console.log('Input can not be empty')
        return;
    }
    input.trim()
    if (input.toLowerCase() === 'rock' || input.toLowerCase() === 'paper' || input.toLowerCase() == 'scissors') {
        return input;
    } else {
        console.log('Invalid input')
        return;
    } 
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === null || humanChoice === undefined) {
            return;
        }


        if (humanChoice === computerChoice) {
            console.log(`You both chose ${humanChoice}`);
            return;
        }
    
        if (computerChoice === 'rock' && humanChoice === 'scissors') {
            console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
            computerScore+=1;
        } else if (computerChoice === 'paper' && humanChoice === 'rock') {
            console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
            computerScore+=1;
        } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
            console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
            computerScore+=1;
        } else {
            console.log(`You won! ${humanChoice} beats ${computerChoice}`);
            humanScore+=1;
        }
    }

    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }


    if (humanScore === computerScore) {
        console.log('Friendship won')
    } else if (humanScore > computerScore) {
        console.log('Human beats machine!')
    } else {
        console.log('Computer beats fleshbag!')
    }

    console.log('New game!')
    humanScore = 0;
    computerScore = 0;
}

