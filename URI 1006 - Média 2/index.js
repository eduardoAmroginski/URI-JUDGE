var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);

function media(a, b, c) {
  var mediaResult = ((a * 2.0 + b * 3.0 + c * 5.0) / 10.0).toFixed(1);
  console.log(`MEDIA = ${mediaResult}`);
}

media(A, B, C);
