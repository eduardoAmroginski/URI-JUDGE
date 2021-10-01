var input = require("fs").readFileSync("dev/stdin", "utf8");
var valor = parseInt(input.split("\n"))

const calculaQuantidadeNotas = (valor) => {

  console.log(valor)

  let arrNotas = [100, 50, 20, 10, 5, 2, 1]

  arrNotas.forEach(nota => {
    var quantidadeNotas = parseInt(valor / nota);
    console.log(`${quantidadeNotas} nota(s) de R$ ${nota},00`);
    valor = valor % nota;
  });

}

calculaQuantidadeNotas(valor);