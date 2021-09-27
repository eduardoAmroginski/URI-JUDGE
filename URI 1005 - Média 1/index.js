var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);

function media(a, b) {
  var mediaResult = ((a * 3.5 + b * 7.5) / 11.0).toFixed(5);
  console.log(`MEDIA = ${mediaResult}`);
}

media(A, B);
