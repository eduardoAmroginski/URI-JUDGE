var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

var n = 3.14159
var ray = lines[0]
var area = calculaArea(n, parseFloat(ray))

console.log(`A=${area}`)

function calculaArea(n, ray){
  return (n * Math.pow(ray, 2)).toFixed(4)
}