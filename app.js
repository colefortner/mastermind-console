const input = require('readline-sync');

const solution = ['red', 'white', 'blue', 'yellow'];

console.log(solution);

let gameOver = false;
let turns = 0;

while(!gameOver ){

    turns += 1;
    let right = 0;
    let close = 0;
    let wrong = 0;

    let guess1 = input.question('What is the first color? ');
    let guess2 = input.question('What is the second color? ');
    let guess3 = input.question('What is the third color? ');
    let guess4 = input.question('What is the fourth color? ');

    let guesses = [guess1, guess2, guess3, guess4];
    let accounted = [];

    for(let i = 0; i < solution.length; i++){
        if(guesses[i] === solution[i]){
            accounted.push(i);
            right += 1;
        } else if(!solution.includes(guesses[i])){
            accounted.push(i)
            wrong += 1;
        } else if(solution.includes(guesses[i]) && !accounted.includes(solution.indexOf(guesses[i]))) {
            accounted.push(solution.indexOf(guesses[i]))
            close += 1;
        } else {
            wrong += 1;
        }
        console.log(accounted)
    }

    console.log(solution);
    console.log(guesses);
    console.log(`${right} black pegs`);
    console.log(`${wrong} empty`);
    console.log(`${close} white pegs`);

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



