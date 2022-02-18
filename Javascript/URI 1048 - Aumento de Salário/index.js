let input = require("fs").readFileSync("dev/stdin", "utf8");
let salario = parseFloat(input);

const calculaPercentual = (porcentagem) => {
  return porcentagem / 100;
};

const calculaReajuste = (salario, porcentagem) => {
  return salario * porcentagem;
};

const calculaAumentoSalarial = (salario, aumento) => {
  return salario + aumento;
};

const verificaReajuste = (salario) => {
  let percentual;
  let porcento;
  let reajuste;
  let novoSalario;

  if (salario > 0 && salario <= 400) {
    percentual = 15;
  } else if (salario > 400 && salario <= 800) {
    percentual = 12;
  } else if (salario > 800 && salario <= 1200) {
    percentual = 10;
  } else if (salario > 1200 && salario <= 2000) {
    percentual = 7;
  } else if (salario > 2000) {
    percentual = 4;
  }

  porcento = calculaPercentual(percentual);
  reajuste = calculaReajuste(salario, porcento);
  novoSalario = calculaAumentoSalarial(salario, reajuste);
  return { percentual, reajuste, novoSalario };
};

const mostraReajusteSalarial = (salario) => {
  let valores = verificaReajuste(salario);

  console.log(`Novo salario: ${valores["novoSalario"].toFixed(2)}`);
  console.log(`Reajuste ganho: ${valores["reajuste"].toFixed(2)}`);
  console.log(`Em percentual: ${valores["percentual"]} %`);
};

mostraReajusteSalarial(salario);
