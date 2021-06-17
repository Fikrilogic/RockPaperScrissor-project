const compChoice = [
    'ROCK',
    'SCISSOR',
    'PAPER'
]
let playerScore = 0
let computerScore = 0

const computerPlay = compChoice[Math.floor(Math.random() * compChoice.length)]


function playRound(compPlay, player) {
    switch (player) {
        case 'PAPER':
            if(compPlay === 'PAPER') {
                console.log('DRAW!, Paper meet Paper')
            } else if (compPlay === 'ROCK') {
                console.log('Player WIN!, Paper beats Rock')
                playerScore+=1
            } else if(compPlay === 'SCISSOR') {
                console.log('Computer WIN!, Scissor beat Paper');
                computerScore+=1
            }
            break;
        case 'ROCK': 
            if(compPlay === 'PAPER') {
                console.log('Computer WIN!, Paper beats Rock')
                computerScore+=1
            } else if (compPlay === 'ROCK') {
                console.log('DRAW!, Rock meet Rock')
            } else if(compPlay === 'SCISSOR') {
                console.log('Player WIN!, Rock beat Scissor');
                playerScore+=1
            }
            break;
        case 'SCISSOR': 
            if(compPlay === 'PAPER') {
                console.log('Player WIN!, Scissor beats Paper')
                playerScore+=1
            } else if (compPlay === 'ROCK') {
                console.log('Computer WIN!, Rock beat Scissor')
                computerScore+=1
            } else if(compPlay === 'SCISSOR') {
                console.log('DRAW!, Scissor meet Scissor');
            }
            break;
    }
}

const gameStart = function() {
    for(let i = 0; i < 5; i++) {
        const playerChoice = prompt("Player set a choice! : 'Rock', 'Paper', Scissor ?").toUpperCase();
        console.log(`Round ${i+1}`);
        playRound(computerPlay, playerChoice);
        if(i >= 4) {
            const score = playerScore - computerScore
            if(score < 0) {
                console.log('Computer Win a game')
            } else if(score > 0){
                console.log('Player win a game')
            } else {
                console.log('Match Draw!!')
            }
        }
    }
    playerScore,computerScore = 0;

}
gameStart();