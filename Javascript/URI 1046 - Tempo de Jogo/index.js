let input = require("fs").readFileSync("dev/stdin", "utf8");
let horarios = input.split(" ").map((x) => parseInt(x));

const verificaTempo = ([hInicial, hFinal]) => {
  if (hInicial > hFinal) {
    let tempo = 24 - (hInicial - hFinal);
    console.log(`O JOGO DUROU ${tempo} HORA(S)`);
  } else if (hInicial < hFinal) {
    let tempo = hFinal - hInicial;
    console.log(`O JOGO DUROU ${tempo} HORA(S)`);
  } else {
    console.log("O JOGO DUROU 24 HORA(S)");
  }
};

verificaTempo(horarios);
