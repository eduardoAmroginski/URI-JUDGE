var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let rounds = parseInt(lines[0]);
let countA = 0,
    countB = 0,
    game = [],
    A = 0,
    B = 0;

while (rounds !== 0) {
    countA = 0, countB = 0;
    for (let i = rounds; i !== 0; i--) {
        game = lines[i].split(' ');
        A = parseInt(game[0]);
        B = parseInt(game[1]);

        if (A > B) countA += 1;
        if (A < B) countB += 1;
        rounds--;
    }

    console.log(`${countA} ${countB}`);

    lines = lines.slice(parseInt(lines[0]) + 1);
    rounds = parseInt(lines[0]);
}

