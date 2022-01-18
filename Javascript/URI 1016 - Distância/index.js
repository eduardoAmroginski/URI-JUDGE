var input = require("fs").readFileSync("dev/stdin", "utf8");
var velocidadeCarroY = parseInt(input.split("\n"))

var calculaDistanciaEntreCarros = (velocidade) => {
  return (60 * velocidade) / 30
}

console.log(`${calculaDistanciaEntreCarros(velocidadeCarroY)} minutos`)