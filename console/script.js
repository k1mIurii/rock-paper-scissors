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

let computerScore = 0;
let humanScore = 0;

const result = document.querySelector("#result");
result.textContent = `Computer: ${computerScore}, Human: ${humanScore}`

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        const notification = document.querySelector("#notification");
        notification.textContent = 'You chose the same!'
        return;
    }

    notification.textContent = '';
    if (computerChoice === 'rock' && humanChoice === 'scissors') {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    } else {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }


}


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(e.target.id, getComputerChoice());
        if (computerScore === 5) {
            result.textContent = `Computer won`
            computerScore = 0;
            humanScore = 0;
        } else if (humanScore === 5) {
            result.textContent = `Human won`
            computerScore = 0;
            humanScore = 0;
        } else {
            result.textContent = `Computer: ${computerScore}, Human: ${humanScore}`
        }
    })
})