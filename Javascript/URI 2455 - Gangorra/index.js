const { exit } = require('process');

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let result = 0;
let P1 = 0, //Peso da criança 1
    P2 = 0, //Peso da criança 2
    C1 = 0, //Comprimento da gangorra lado esquerdo
    C2 = 0; //Comprimento da gangorra lado direito


let calc = (line) => {
    columns = line.split(' ');

    if(parseInt(columns[0]) >= 10){
        P1 = parseInt(columns[0]);
    }else{
        return null;
    }

    if(parseInt(columns[1]) >= 10){
        C1 = parseInt(columns[1]);
    }else{
        return null;
    }

    if(parseInt(columns[2]) >= 10){
        P2 = parseInt(columns[2]);
    }else{
        return null;
    }
    if(parseInt(columns[3]) <= 100){
        C2 = parseInt(columns[3]);
    }else{
        return null;
    }

    let resultA = P1*C1;
    let resultB = P2*C2;

    console.log(`${resultA} ${resultB}`)

    if(resultA === resultB){
        result = 0;
    }else if(resultA > resultB){
        result = -1;
    }else{
        result = 1;
    }

    console.log(result);
};

calc(lines[0]);

