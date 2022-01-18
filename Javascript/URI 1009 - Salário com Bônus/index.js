var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

var name = lines.shift();
var salary = parseFloat(lines.shift());
var sales = parseFloat(lines.shift());

function calcSalaryWithBonus(salary, sales) {
  var bonus = calcBonus(sales)

  return (salary + bonus)
}

function calcBonus(sales) {
  return sales * 0.15
}

function showResult(salary, sales){
  var salaryWithBonus = (calcSalaryWithBonus(salary, sales)).toFixed(2)

  console.log(`TOTAL = R$ ${salaryWithBonus}`)

}

showResult(salary, sales)