var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let CPFs = lines;

let verifyCPF = (CPF) => {
    CPF = cleanCPF(CPF);

    let b1 = verifyB1(CPF);
    let b2 = verifyB2(CPF);

    if(b1 === true && b2 === true){
        return console.log("CPF valido");
    }else{
        return console.log("CPF invalido");
    }
};

let cleanCPF = (CPF) => {
    CPF = CPF.replace(/[^0-9]+/g, "");
    return CPF
}

let verifyB1 = (CPF) => {
    let b1 = parseInt(CPF.substr(-2)[0]);
    let soma = 0, mult = 0;
    for(i = 0; i <= CPF.length - 3; i++){
        mult = parseInt(CPF[i]) * (i + 1);

        soma += mult;
    }

    let rest = soma % 11;
    
    if(rest === 10){
        rest = 0;
    }
    
    if(rest === b1){
        return true;
    }else{
        return false;
    }

}

let verifyB2 = (CPF) => {
    let b2 = parseInt(CPF.substr(-2)[1]);
    let soma = 0, mult = 0, aux = 0;
    for(i = CPF.length - 2; i > 0; i--){
        mult = parseInt(CPF[aux]) * (i);
        soma += mult;
        aux++;

    }

    let rest = soma % 11;

    if(rest === 10){
        rest = 0;
    }

    if(rest === b2){
        return true;
    }else{
        return false;
    }

}

CPFs.forEach(CPF => {
    if(CPF !== ""){
        verifyCPF(CPF);
    }
});
