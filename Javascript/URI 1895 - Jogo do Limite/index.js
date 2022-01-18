var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let initialCard = parseInt(lines[0].split(" ")[1]);
let limit = parseInt(lines[0].split(" ")[2]);

let x = -1;
let count_a = 0,
  count_b = 0;

lines.splice(0, 1);

while (true) {
  let game = lines;
  let dif = Math.abs(parseInt(initialCard) - parseInt(game[0]));
  if (dif <= limit) {
    if (x === -1) {
      count_a += dif;
    } else {
      count_b += dif;
    }
    initialCard = game[0];
  }

  x = x * -1;

  lines.splice(0, 1);
  if (!lines[0] || lines === "") {
    console.log(count_a, count_b);
    return false;
  }
}
