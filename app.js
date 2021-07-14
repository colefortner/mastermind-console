const input = require('readline-sync');

const solution = ['red', 'white', 'blue', 'yellow', 'green'];

console.log(solution);

let gameOver = false;
let turns = 0;

while(!gameOver ){

    turns += 1;
    let right = 0;
    let close = 0;
    let wrong = 0;

    let guess1 = input.question('What is the first color? ');
    let guess2 = input.question('Waht is the second color? ');
    let guess3 = input.question('What is the third color? ');
    let guess4 = input.question('What is the fourth question? ');
    let guess5 = input.question('What is the fifth color? ');

    let guesses = [guess1, guess2, guess3, guess4, guess5];

    for(let i = 0; i < solution.length; i++){
        if(guesses[i] === solution[i]){
            right += 1;
        } else if(!solution.includes(guesses[i])){
            wrong += 1;
        } else {
            close += 1;
        }
    }

    console.log(solution);
    console.log(guesses);
    console.log(`You got ${right} right`);
    console.log(`You got ${wrong} completely wrong`);
    console.log(`You are close on ${close} others`);

    if(right === 5){
        gameOver = true;
        console.log('You Win!')
    }

    let keepPlaying = input.question('Do you want to keep playing Y/N? ');
    if(keepPlaying === 'N'){
        console.log('Game Ended By User');
        return
    }
}



