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
result.style.display="none"

RockButton.addEventListener('click', () => Pic1("rock-hand"));
PaperButton.addEventListener('click', () => Pic1("paper-hand"));
ScissorButton.addEventListener('click', () => Pic1("scissors-hand"));

function Pic1(choice){
    img1.src = `./assets/${choice}.png`;
    const comp = Pic2();
    check(choice, comp);
}

function Pic2(){
    const pictures = ["paper-hand", "rock-hand", "scissors-hand"];
    const random = Math.floor(Math.random() * pictures.length);
    const randomPicture = pictures[random];
    img2.src = `./assets/${randomPicture}.png`;
    return pictures[random];
}

function check(user, comp) {
    if (user === comp) {
        score1 += 1;
        score2 += 1;
    } else if (
        (user === 'rock-hand' && comp === 'scissors-hand') ||
        (user === 'paper-hand' && comp === 'rock-hand') ||
        (user === 'scissors-hand' && comp === 'paper-hand')
    ) {
        score1 += 1;
    } else {
        score2 += 1;
    }
    p1.textContent = score1;
    p2.textContent = score2;
    gameOver()
}

function gameOver(){
    if (score1+score2===7){
        RockButton.style.display="none"
        PaperButton.style.display="none"
        ScissorButton.style.display="none"
        result.style.display="inline"
        if (score1 >> score2){
            document.getElementById('desicion').textContent = "You Won!!!"
        } else{
            document.getElementById('desicion').textContent = "Computer Won!!!"
        }
    }
    document.getElementById('playAgain').addEventListener('click',()=>{
        window.location.reload()
    })
}