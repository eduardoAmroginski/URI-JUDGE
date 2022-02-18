let input = require("fs").readFileSync("dev/stdin", "utf8");
let salario = input.split("\n").map((x) => parseFloat(x))[0];

const verificaImposto = (salario) => {
  let imposto = 0;
  let diferenca;

  if (salario > 4500) {
    imposto = 1000 * 0.08 + 1500 * 0.18;
    diferenca = salario - 4500;
    imposto += diferenca * 0.28;
  }
  if (salario > 4500) {
    imposto = 1000 * 0.08 + 1500 * 0.18;
    diferenca = salario - 4500;
    imposto += diferenca * 0.28;
  } else if (salario > 3000) {
    imposto = 1000 * 0.08;
    diferenca = salario - 3000;
    imposto += diferenca * 0.18;
  } else if (salario > 2000) {
    diferenca = salario - 2000;
    imposto = diferenca * 0.08;
  }

  console.log(imposto > 0 ? `R$ ${imposto.toFixed(2)}` : "Isento");
};

verificaImposto(salario);
