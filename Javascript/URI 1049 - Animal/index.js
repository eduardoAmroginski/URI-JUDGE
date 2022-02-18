let input = require("fs").readFileSync("dev/stdin", "utf8");
let dados = input.split("\n").map((x) => x.replace("\r", ""));

seres = {
  vertebrado: {
    ave: { carnivoro: "aguia", onivoro: "pomba" },
    mamifero: { herbivoro: "vaca", onivoro: "homem" },
  },
  invertebrado: {
    inseto: { hematofago: "pulga", herbivoro: "lagarta" },
    anelideo: { hematofago: "sanguessuga", onivoro: "minhoca" },
  },
};

const verificaAnimal = ([esqueleto, tipo, alimentacao]) => {
  console.log(seres[esqueleto][tipo][alimentacao]);
};

verificaAnimal(dados);
