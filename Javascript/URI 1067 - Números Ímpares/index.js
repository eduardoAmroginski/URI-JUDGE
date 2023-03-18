let input = require("fs").readFileSync("dev/stdin", "utf8");
let value = input.split("\n").map((x) => parseInt(x))[0];

function range(start, end) {
  if (start === end) return [start];
  return [start, ...range(start + 1, end)];
}

const testOddNumbers = (numbers) => {
  numbers.forEach((number) => {
    number % 2 !== 0 && console.log(number);
  });
};

const numbers = range(1, value);

testOddNumbers(numbers);
