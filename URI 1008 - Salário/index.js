var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

var number = Number(lines.shift());
var valueHour = Number(lines.shift());
var hours = parseFloat(lines.shift());

function calcSalary(valueHour, hours) {
  return (valueHour * hours).toFixed(2)
}

function showResult(number, value, hours){
  var salary = calcSalary(value, hours)

  console.log(`NUMBER = ${number}\nSALARY = U$ ${salary}`)

}

showResult(number, valueHour, hours)
