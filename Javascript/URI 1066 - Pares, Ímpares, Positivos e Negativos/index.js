let input = require("fs").readFileSync("dev/stdin", "utf8");
let lines = input.split("\n").map((x) => parseInt(x));

let pares = 0;
let impares = 0;
let positives = 0;
let negatives = 0;

const testNumbers = (value) => {
  value % 2 === 0 ? pares++ : impares++;
  value > 0 && positives++;
  value < 0 && negatives++;
};

const showCount = (numbers) => {
  numbers.forEach((number) => {
    if (!isNaN(number)) testNumbers(number);
  });

  console.log(`${pares} valor(es) par(es)`);
  console.log(`${impares} valor(es) impar(es)`);
  console.log(`${positives} valor(es) positivo(s)`);
  console.log(`${negatives} valor(es) negativo(s)`);
};

showCount(lines);
