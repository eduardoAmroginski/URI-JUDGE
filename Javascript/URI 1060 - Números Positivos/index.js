let input = require("fs").readFileSync("dev/stdin", "utf8");
let lines = input.split("\n").map((x) => parseFloat(x));


const countPositiveNumbers = (numbers) => {
  let count = 0

  numbers.forEach(number => {
    if (number >= 0) ++count
  });

  console.log(`${count} valores positivos`)

}

countPositiveNumbers(lines)

