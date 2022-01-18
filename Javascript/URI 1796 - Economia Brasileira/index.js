var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let count_N = 0, count_Y = 0;

let verify = (people, opinions) => {
    if (parseInt(people) < 4 || parseInt(people) > 233000) {
        return null;
    }


    let opinion = opinions.slice(1)[0].split(' ');
    opinion.map((optnionItem) => {
        optnionItem = parseInt(optnionItem);

        if (optnionItem === 0) {
            count_Y += 1;
        }
        if (optnionItem === 1) {
            count_N += 1;
        }
    });

    count_Y <= count_N ? console.log('N') : console.log('Y');
};


let people = lines.slice(0);
verify(people[0], people);