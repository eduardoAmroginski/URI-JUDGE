var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

lines.forEach(function(line){

  if(line !== ""){
    var A = parseFloat(line.split(" ")[0])
    var B = parseFloat(line.split(" ")[1])
    var C = parseFloat(line.split(" ")[2])

    var areaTriangulo = calcAreaTrianguloRetangulo(A, C);
    var areaCirculo = calcAreaCirculo(C);
    var areaTrapezio = calcAreaTrapezio(A, B, C);
    var areaQuadrado = calcAreaQuadrado(B);
    var areaRetangulo = calcAreaRetangulo(A, B)
    
    console.log(`TRIANGULO: ${areaTriangulo}\nCIRCULO: ${areaCirculo}\nTRAPEZIO: ${areaTrapezio}\nQUADRADO: ${areaQuadrado}\nRETANGULO: ${areaRetangulo}`)
  }
  

})

function calcAreaTrianguloRetangulo(base, altura){
  return ((base * altura) / 2).toFixed(3)
}

function calcAreaCirculo(raio){
  var pi = 3.14159
  return (pi * Math.pow(raio, 2)).toFixed(3)
}

function calcAreaTrapezio(base1, base2, altura){
  return (((base1 + base2) * altura) / 2).toFixed(3)
}

function calcAreaQuadrado(lado){
  return (Math.pow(lado, 2)).toFixed(3)
}

function calcAreaRetangulo(base, altura){
  return (base * altura).toFixed(3)
}