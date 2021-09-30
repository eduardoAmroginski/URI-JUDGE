var input = require("fs").readFileSync("dev/stdin", "utf8");
var [A, B, C] = input.split(" ").map(value => parseInt(value));

function verificaValorMaior(A, B){
  return (A + B + Math.abs(A - B)) / 2;
}

maiorAB = verificaValorMaior(A, B);

maior = (maiorAB > C) ? maiorAB : C;

console.log(`${maior} eh o maior`)



