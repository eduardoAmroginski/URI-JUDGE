let input = require("fs").readFileSync("dev/stdin", "utf8");
let horarios = input.split(" ").map((x) => parseInt(x));

const converteHorario = (hora, minutos) => {
  return hora * 60 + minutos;
};

const verificaTempo = ([hInicial, mInicial, hFinal, mFinal]) => {
  let final = converteHorario(hFinal, mFinal);
  let inicial = converteHorario(hInicial, mInicial);
  let diferenca = final - inicial;

  if (diferenca <= 0) diferenca += 24 * 60;

  let horas = parseInt(diferenca / 60);
  let minutos = parseInt(diferenca % 60);

  console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
};

verificaTempo(horarios);
