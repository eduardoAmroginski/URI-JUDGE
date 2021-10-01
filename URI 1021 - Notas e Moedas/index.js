var input = require("fs").readFileSync("dev/stdin", "utf8");
var valor = parseFloat(input.split("\n")[0].replace(",", "."))

const calculaQuantidadeNotasMoedas = (valor) => {
  console.log("NOTAS:")

  let arrNotas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00]
  let arrMoedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
  arrNotas.forEach(nota => {
    var quantidadeNotas = parseInt(valor / nota);
    console.log(`${quantidadeNotas} nota(s) de R$ ${nota.toFixed(2)}`);
    valor = parseFloat(valor % nota).toFixed(2);
  });

  console.log("MOEDAS:")
  arrMoedas.forEach(moeda => {
    var quantidadeMoeda = parseInt(valor / moeda)
    console.log(`${quantidadeMoeda} moeda(s) de R$ ${moeda.toFixed(2)}`);
    valor = parseFloat(valor % moeda).toFixed(2);
  });

}

calculaQuantidadeNotasMoedas(valor);