var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let A = 0, B = 0, C = 0;
let result = "";

let match = (columns) => {
    columns = columns.split(' ');

    A = parseInt(columns[0]);
    B = parseInt(columns[1]);
    C = parseInt(columns[2]);
    
    compareValues(A, B, C);
};

let compareValues = (A, B, C) => {

    result = "";
    if(A === B && A === C && B === C ){
        return console.log("*");
    }
    if(A !== B && A !== C && B === C ){
        return console.log("A");
    }
    if(A !== B && A === C && B !== C){
        return console.log("B");
    }
    if(A == B && A !== C && B !== C){
        return console.log("C");
    }

};

for(let i = 0; i < lines.length; i++){
    let columns = lines[i];

    match(columns);
}