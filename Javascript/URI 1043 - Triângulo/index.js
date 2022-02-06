let input = require("fs").readFileSync("dev/stdin", "utf8");
let valores = input.split(" ").map((x) => parseFloat(x));

const calculaPerimetro = ([a, b, c]) => {
  return a + b + c;
};

const calculaArea = ([a, b, c]) => {
  return ((a + b) * c) / 2;
};

const mostraResultado = (valores) => {
  if (isTriangule(valores)) {
    console.log(`Perimetro = ${calculaPerimetro(valores).toFixed(1)}`);
  } else {
    console.log(`Area = ${calculaArea(valores).toFixed(1)}`);
  }
};

const isTriangule = ([a, b, c]) => {
  if (a < b + c && b < a + c && c < a + b) return true;
  else return false;
};

mostraResultado(valores);
