let input = require("fs").readFileSync("dev/stdin", "utf8");
let digitos = input.split("\n").map((x) => parseInt(x))[0];

ddd = {
  61: "Brasilia",
  71: "Salvador",
  11: "Sao Paulo",
  21: "Rio de Janeiro",
  32: "Juiz de Fora",
  19: "Campinas",
  27: "Vitoria",
  31: "Belo Horizonte",
};

console.log(ddd[digitos] ? ddd[digitos] : "DDD nao cadastrado");
