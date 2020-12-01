const { exec } = require('child_process');

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let commands = lines[0];
let aux = 0;
let direction = 'N';

let execCommand = (lines) => {
    commands = parseInt(lines[0]);
    if (parseInt(commands) === 0){
        return null;
    }

    let moves = lines[1];
    moves = moves.split('');
    direction = 'N';
    moves.map((move) => {

        switch (direction){
            case 'N':
                if(move === 'D'){ direction = 'L' }
                if( move === 'E'){ direction = 'O' }
                break;
            case 'L':
                if(move === 'D'){ direction = 'S' }
                if( move === 'E'){ direction = 'N' }
                break;
            case 'S':
                if(move === 'D'){ direction = 'O' }
                if( move === 'E'){direction = 'L' }
                break;
            case 'O':
                if(move === 'D'){ direction = 'N' }
                if( move === 'E'){ direction = 'S' }
                break;
        }

    });

    console.log(direction);
};

while(parseInt(commands) !== 0){
    let line = lines.slice(aux);
    execCommand(line);
    commands = lines[aux += 2];
}