var input = require("fs").readFileSync("dev/stdin", "utf8");
var [tempo, velocidade] = input.split("\n").map(value => parseInt(value))

var calculoGastoCombustivel = (tempo, velocidade) => {
  return ((tempo * velocidade) / 12).toFixed(3)
}

console.log(calculoGastoCombustivel(tempo, velocidade))