let input = require("fs").readFileSync("dev/stdin", "utf8");
let [X, Y] = input.split("\n").map((x) => parseInt(x));
let total = 0;

const calcOddNumbers = (maior, menor) => {
  for (let i = maior - 1; i > menor; i--) {
    if (i % 2 !== 0) {
      total += i;
    }
  }

  console.log(total);
};

X > Y ? calcOddNumbers(X, Y) : calcOddNumbers(Y, X);
