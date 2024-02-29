const RockButton = document.getElementById("button1");
const PaperButton = document.getElementById("button2");
const ScissorButton = document.getElementById("button3");

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

let score1 = 0;
let score2 = 0;

const result = document.getElementById('result') 
result.style.display = "none";

RockButton.addEventListener('click', () => makeChoice("rock-hand"));
PaperButton.addEventListener('click', () => makeChoice("paper-hand"));
ScissorButton.addEventListener('click', () => makeChoice("scissors-hand"));

function makeChoice(userChoice){
    img1.src = `./assets/${userChoice}.png`;
    const computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
}

function getComputerChoice(){
    const choices = ["paper-hand", "rock-hand", "scissors-hand"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    img2.src = `./assets/${computerChoice}.png`;
    return computerChoice;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        score1 += 1;
        score2 += 1;
    } else if (
        (userChoice === 'rock-hand' && computerChoice === 'scissors-hand') ||
        (userChoice === 'paper-hand' && computerChoice === 'rock-hand') ||
        (userChoice === 'scissors-hand' && computerChoice === 'paper-hand')
    ) {
        score1 += 1;
    } else {
        score2 += 1;
    }
    p1.textContent = score1;
    p2.textContent = score2;
    checkGameOver();
}

function checkGameOver(){
    if (score1 + score2 === 7){
        RockButton.style.display = "none";
        PaperButton.style.display = "none";
        ScissorButton.style.display = "none";
        result.style.display = "inline";
        if (score1 > score2){
            document.getElementById('decision').textContent = "You Won!!!";
        } else {
            document.getElementById('decision').textContent = "Computer Won!!!";
        }
    }
    document.getElementById('playAgain').addEventListener('click', () => {
        window.location.reload();
    });
}
