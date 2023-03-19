let input = require("fs").readFileSync("dev/stdin", "utf8");
let valores = input.split("\n").map((x) => parseInt(x));
valores.shift();
let inRange = 0;
let outRange = 0;

const range = (value, min, max) => {
  return value >= min && value <= max;
};

const testaValor = (values) => {
  values.forEach((value) => {
    if (range(value, 10, 20)) {
      inRange += 1;
    } else if (!isNaN(value)) {
      outRange += 1;
    }
  });
};

testaValor(valores);

console.log(`${inRange} in`);
console.log(`${outRange} out`);
