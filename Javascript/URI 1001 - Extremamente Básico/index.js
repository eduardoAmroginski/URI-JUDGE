var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

var A = Number(lines[0])
var B = Number(lines[1])

function soma(a, b){
  var x = a + b
  console.log(`X = ${x}`)
}

soma(A, B);