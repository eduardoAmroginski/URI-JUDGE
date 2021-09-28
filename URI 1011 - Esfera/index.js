var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

var ray = lines.shift();
var pi = 3.14159;


function calculaVolumeEsfera(ray, pi){
  return ((4.0/3) * pi * Math.pow(ray, 3)).toFixed(3)
}

function showResult(){
  var result = calculaVolumeEsfera(ray, pi)
  console.log(`VOLUME = ${result}`);
}

showResult()