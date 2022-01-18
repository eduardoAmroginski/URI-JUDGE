var input = require("fs").readFileSync("dev/stdin", "utf8");
var tempo = parseInt(input.split("\n"));

const converteTempo = (tempo) => {
  let segundos = tempo

  const horas = parseInt(segundos / 3600)
  segundos = segundos % 3600
  
  const minutos = parseInt(segundos / 60)
  segundos = segundos % 60
  
  console.log(`${horas}:${minutos}:${segundos}`);
}

converteTempo(tempo);