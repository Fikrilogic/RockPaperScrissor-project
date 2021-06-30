const compChoice = [
    'ROCK',
    'SCISSOR',
    'PAPER'
]
let playerScore = 0
let computerScore = 0
let count = 3;
const start = document.querySelector('.start');
const game = document.querySelector('.game');
const score = document.querySelector('.score');
const container = document.querySelector('.container-game');
const counter = document.querySelector('.start button');
const compScore = document.querySelector('#computer p');
const playScore = document.querySelector('#player p');
const resultContainer = document.querySelector('.result');
const endresult = document.querySelector('.end-result');
const gameResult = document.querySelector('.game-result');
const buttonGame = document.querySelectorAll('.game button');


function playGame () {
    startGame();
    let playerChoice;
    buttonGame.forEach(button => {
        button.addEventListener('click', (e) => {
            const choice = document.querySelectorAll('.game-icon');
            choice.forEach(button => {
                if(button.classList.contains('rock')) {
                    playerChoice = "ROCK"
                } else if(button.classList.contains('paper')) {
                    playerChoice = 'PAPER';
                } else {
                    playerChoice = 'SCISSOR';
                }
            })
            playRound(computerChoice(compChoice), playerChoice);
            resultGame()
            endGame();
        });
    });
}

buttonGame.forEach(button => button.addEventListener('mouseover', (e) => {
    e.target.classList.add('gamehover');
    setTimeout(() => {
        e.target.classList.remove('gamehover');
    }, 500)
}))

const computerChoice = (computer) => {
    const comp = computer[Math.floor(Math.random() * computer.length)];
    return  comp;
}

const displayGame = () => {
    setTimeout(()=> {
        game.classList.add('visible');
        game.classList.remove('hidden');
        score.style['display'] = 'flex';
        resultContainer.style.display = 'initial';
    }, 4000);
}

function playRound(compPlay, player) {
    switch (player) {
        case 'PAPER':
            if(compPlay === 'PAPER') {
                gameResult.textContent = 'DRAW!, Paper meet Paper';
            } else if (compPlay === 'ROCK') {
                gameResult.textContent = 'Player WIN!, Paper beats Rock';
                playerScore+=1
            } else if(compPlay === 'SCISSOR') {
                gameResult.textContent = 'Computer WIN!, Scissor beat Paper';
                computerScore+=1
            }
            break;
        case 'ROCK': 
            if(compPlay === 'PAPER') {
                gameResult.textContent = 'Computer WIN!, Paper beats Rock';
                computerScore+=1
            } else if (compPlay === 'ROCK') {
                gameResult.textContent = 'DRAW!, Rock meet Rock'
            } else if(compPlay === 'SCISSOR') {
                gameResult.textContent = 'Player WIN!, Rock beat Scissor'
                playerScore+=1
            }
            break;
        case 'SCISSOR': 
            if(compPlay === 'PAPER') {
                gameResult.textContent = 'Player WIN!, Scissor beats Paper'
                playerScore+=1
            } else if (compPlay === 'ROCK') {
                gameResult.textContent = 'Computer WIN!, Rock beat Scissor'
                computerScore+=1
            } else if(compPlay === 'SCISSOR') {
                gameResult.textContent = 'DRAW!, Scissor meet Scissor'
            }
            break;
    }
}

const startGame = () => {
    start.addEventListener('click', function(e) {
        setInterval(timer, 1000) 
        displayGame(); 
    });
}

const timer = () => {
    if(count === 0){
        endTimer();
        clearTimeout(timer);
    } else {
        counter.innerHTML = count;
        count --
    }
}

const endTimer = function() {
    start.style.display = 'none';
}


const endGame = () => {
    if(playerScore === 5 && playerScore > computerScore) {
        reset();
        endresult.innerHTML = 'You WIN'
        console.log('player win');
    } else if (computerScore === 5 && computerScore > playerScore) {
        reset();
        endresult.innerHTML = 'Computer WIN';
        console.log('computer win');
    } else if (computerScore === 5 && playerScore === 5) {
        reset();
        endresult.innerHTML = 'DRAW'
        console.log(draw);
    }
}

const resultGame = () => {
    compScore.textContent = computerScore.toString();
    playScore.textContent = playerScore.toString();
}

const reset = () => {
    const btnReset = document.createElement('button');
    btnReset.textContent = 'Reset Game';
    btnReset.classList.add('btn');
    btnReset.addEventListener('click', () => {
        window.location.reload();
    })

    game.classList.remove('visible');
    game.classList.add('hidden');
    container.appendChild(btnReset);
}

playGame();
