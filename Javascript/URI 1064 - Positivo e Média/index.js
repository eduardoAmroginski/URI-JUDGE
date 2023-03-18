let input = require("fs").readFileSync("dev/stdin", "utf8");
let lines = input.split("\n").map((x) => parseFloat(x));

let count = 0;
let total = 0;

const countPositiveNumbers = (numbers) => {
  numbers.forEach((number) => {
    if (number >= 0) {
      total += number;
      count++;
    }
  });

  console.log(`${count} valores positivos`);
};

const calcMedia = (value, quantity) => {
  let media = value / quantity;

  console.log(media.toFixed(1));
};

countPositiveNumbers(lines);
calcMedia(total, count);
