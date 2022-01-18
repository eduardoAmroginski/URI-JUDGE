var input = require("fs").readFileSync("dev/stdin", "utf8");
var [A, B, C] = input.split(" ").map(value => parseFloat(value));

const calcBhaskara = (a, b, c) => {
  const delta = calcDelta(a, b, c);
  const base = 2 * a
  let r1, r2;

  if(delta < 0 || base === 0){
    console.log("Impossivel calcular")
  }else{
    
    r1 = (- b + Math.sqrt(delta)) / base;
    console.log(`R1 = ${r1.toFixed(5)}`)

    r2 = (- b - Math.sqrt(delta)) / base;
    console.log(`R2 = ${r2.toFixed(5)}`)

  }

}

const calcDelta = (a, b, c) => {
  return Math.pow(b, 2) - 4 * a * c
}

calcBhaskara(A, B, C);
