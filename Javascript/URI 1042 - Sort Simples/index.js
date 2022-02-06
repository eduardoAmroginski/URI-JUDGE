let input = require("fs").readFileSync("dev/stdin", "utf8");
let lista = input.split(" ").map((x) => parseInt(x));

const mostraListas = (lista) => {
  let lista_original = [...lista];

  let lista_sorted = lista.sort(function (a, b) {
    return a - b;
  });

  lista_sorted.forEach((x) => {
    console.log(x);
  });

  console.log("");

  lista_original.forEach((y) => {
    console.log(y);
  });
};

mostraListas(lista);
