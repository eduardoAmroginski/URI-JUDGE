var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let rounds = lines[0];
let maria_count = 0, joao_count = 0, aux = 0;

let play = (rounds, lines) => {
    if (parseInt(rounds) === 0 || parseInt(rounds) > 10000) {
        return null;
    }

    maria_count = 0, joao_count = 0;
    let round = lines.slice(1)[0].split(' ');
    round.map((roundItem) => {
        roundItem = parseInt(roundItem);

        if (roundItem === 0) {
            maria_count += 1;
        }
        if (roundItem === 1) {
            joao_count += 1;
        }
    });

    console.log(`Mary won ${maria_count} times and John won ${joao_count} times`);
};

while (parseInt(rounds) !== 0) {
    let round = lines.slice(aux);
    play(round[0], round);
    rounds = lines[aux += 2];
}