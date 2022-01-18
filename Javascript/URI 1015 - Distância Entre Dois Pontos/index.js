var input = require("fs").readFileSync("dev/stdin", "utf8");
var [p1, p2] = input.split("\n")

var [x1, y1] = p1.split(" ").map(value => Number(value))
var [x2, y2] = p2.split(" ").map(value => Number(value))

var calculaDistancia = (x1, y1, x2, y2) => {
  return (Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))).toFixed(4)
}

console.log(calculaDistancia(x1, y1, x2, y2))