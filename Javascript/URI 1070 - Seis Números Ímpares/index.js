let input = require("fs").readFileSync("dev/stdin", "utf8");
let value = input.split("\n").map((x) => parseInt(x))[0];

const getSixOddNumbers = (number) => {
  let count = number;
  let oddNumbers = [];
  while (oddNumbers.length < 6) {
    if (count % 2 !== 0) {
      console.log(count);
      oddNumbers.push(count);
    }
    count++;
  }
};

getSixOddNumbers(value);
