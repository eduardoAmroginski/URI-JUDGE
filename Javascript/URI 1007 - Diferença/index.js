var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());
var D = parseFloat(lines.shift());

function diferenca(a, b, c, d) {
  var diferencaResult = (A * B - C * D);
  console.log(`DIFERENCA = ${diferencaResult}`);
}

diferenca(A, B, C, D);
