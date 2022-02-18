let input = require("fs").readFileSync("dev/stdin", "utf8");
let [a, b] = input.split(" ").map((x) => parseInt(x));

const isMultiple = (a, b) => {
  return b % a === 0 || a % b === 0 ? true : false;
};

const showResult = (a, b) => {
  isMultiple(a, b)
    ? console.log("Sao Multiplos")
    : console.log("Nao sao Multiplos");
};

showResult(a, b);
