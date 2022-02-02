let input = require("fs").readFileSync("dev/stdin", "utf8");
let [id, quantidade] = input.split(" ").map((x) => parseInt(x));

let cardapio = [
  {
    id: 1,
    especificacao: "Cachorro Quente",
    preco: "R$ 4.00",
  },
  {
    id: 2,
    especificacao: "X-Salada",
    preco: "R$ 4.50",
  },
  {
    id: 3,
    especificacao: "X-Bacon",
    preco: "R$ 5.00",
  },
  {
    id: 4,
    especificacao: "Torrada Simples",
    preco: "R$ 2.00",
  },
  {
    id: 5,
    especificacao: "Refrigerante",
    preco: "R$ 1.50",
  },
];

const buscaLanche = (id) => {
  return cardapio.find((item) => item.id === id);
};

const getPrecoLanche = (id) => {
  return parseFloat(buscaLanche(id).preco.replace("R$ ", "")).toFixed(2);
};

const calculaComanda = (id, quantidade) => {
  let precoLanche = getPrecoLanche(id);

  return parseFloat(quantidade * precoLanche).toFixed(2);
};

console.log("Total: R$", calculaComanda(id, quantidade));
