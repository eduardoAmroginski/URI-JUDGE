var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

calc = (operation) => {
  let left = operation.split("=")[0].split("+");
  let right = operation.split("=")[1];
  let a = parseInt(reverseString(left[0]));
  let b = parseInt(reverseString(left[1]));
  let c = parseInt(reverseString(right));

  if (a + b === c) {
    return console.log("True");
  } else {
    return console.log("False");
  }
};

let reverseString = (element) => {
  return element.split("").reverse().join("");
};

lines.forEach((equation) => {
  if (equation !== "") {
    calc(equation);
  }
});
