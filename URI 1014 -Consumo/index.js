var input = require("fs").readFileSync("dev/stdin", "utf8");
var [X, Y] = input.split("\n").map(value => Number(value));

var calculaConsumo = (X, Y) => {
  return (X / Y).toFixed(3);
}

console.log(`${calculaConsumo(X, Y)} km/l`)