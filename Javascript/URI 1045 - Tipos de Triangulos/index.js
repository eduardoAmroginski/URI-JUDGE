let input = require("fs").readFileSync("dev/stdin", "utf8");
let valores = input.split(" ").map((x) => parseFloat(x));

valores.sort((a, b) => b - a);

const isTriangule = ([a, b, c]) => {
  return a >= b + c ? true : false;
};

const isTrianguloRetangulo = ([a, b, c]) => {
  return a ** 2 === b ** 2 + c ** 2;
};

const isTrianguloObtusangulo = ([a, b, c]) => {
  return a ** 2 > b ** 2 + c ** 2;
};

const isTrianguloAcutangulo = ([a, b, c]) => {
  return a ** 2 < b ** 2 + c ** 2;
};

const isTrianguloEquilatero = ([a, b, c]) => {
  return a == b && b == c;
};

const isTrianguloIsosceles = ([a, b, c]) => {
  return a == b || b == c;
};

const verifyTriangules = (valores) => {
  if (isTriangule(valores)) {
    console.log("NAO FORMA TRIANGULO");
  } else {
    if (isTrianguloRetangulo(valores)) {
      console.log("TRIANGULO RETANGULO");
    }

    if (isTrianguloObtusangulo(valores)) {
      console.log("TRIANGULO OBTUSANGULO");
    }

    if (isTrianguloAcutangulo(valores)) {
      console.log("TRIANGULO ACUTANGULO");
    }

    if (isTrianguloEquilatero(valores)) {
      console.log("TRIANGULO EQUILATERO");
    } else if (isTrianguloIsosceles(valores)) {
      console.log("TRIANGULO ISOSCELES");
    }
  }
};

verifyTriangules(valores);
