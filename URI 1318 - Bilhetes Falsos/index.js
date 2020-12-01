var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

while (true) {
  let arrTrueTickets = [];
  let falseTickets = 0;
  let bag = lines[1].split(" ");

  for (let i = 0; i < bag.length; i++) {
    for (let j = i + 1; j < bag.length; j++) {
      if (parseInt(bag[i]) === parseInt(bag[j])) {
        if (!arrTrueTickets.find((element) => element === bag[i])) {
          falseTickets++;
        }
        arrTrueTickets.push(bag[i]);
      }
    }
  }

  console.log(falseTickets);

  lines.splice(0, 2);
  arrTrueTickets = [];
  if (lines[0] === "0 0") {
    return false;
  }
}
