var input = require("fs").readFileSync("dev/stdin", "utf8");
var valor = parseFloat(input);

const range = (value, min, max) => {
  return value >= min && value <= max 
}

const testaValor = (value) => {
  if(range(value, 0, 25)){
    console.log("Intervalo [0,25]")
  }else if(range(value, 25, 50)){
    console.log("Intervalo (25,50]")
  }else if(range(value, 50, 75)){
    console.log("Intervalo (50,75]")
  }else if(range(value, 75, 100)){
    console.log("Intervalo (75,100]")
  }else{
    console.log("Fora de intervalo")
  }
}

testaValor(valor)