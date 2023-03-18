let input = require("fs").readFileSync("dev/stdin", "utf8");
let lines = input.split("\n").map((x) => parseInt(x));

let count = 0;

const countEvenNumbers = (numbers) => {
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      count++;
    }
  });

  console.log(`${count} valores pares`);
};

countEvenNumbers(lines);
