let input = require("fs").readFileSync("dev/stdin", "utf8");
let N = input.split("\n").map((x) => parseInt(x))[0];

const squareEvenNumbers = (value) => {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 0) {
      console.log(`${i}^2 = ${i ** 2}`);
    }
  }
};

squareEvenNumbers(N);
