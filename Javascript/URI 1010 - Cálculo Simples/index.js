var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

var totalValue = 0;

lines.forEach(line => {
  if(line != ""){
    var parts = line.split(" ")
    var units = parseInt(parts[1])
    var priceUnit = (parseFloat(parts[2])).toFixed(2)
    
    var partialPrice = calcPartsValue(priceUnit, units)
    
    calcTotalValue(partialPrice)
  }
  
});

console.log(`VALOR A PAGAR: R$ ${totalValue.toFixed(2)}`)


function calcPartsValue(priceUnit, units){
  return priceUnit * units
}

function calcTotalValue(partialPrice){
  totalValue += partialPrice
}