let input = require("fs").readFileSync("dev/stdin", "utf8");
let [notas, notaExame] = input.split("\n");

notas = notas.split(" ").map((x) => parseFloat(x));

notaExame = notaExame ? parseFloat(notaExame) : "";

const mostraNotaAluno = (notas, notaExame) => {
  let media = calculaMedia(notas);
  let mediaFinalComExame;

  console.log(`Media: ${parseFloat(media).toFixed(1)}`);

  if (media >= 7.0) {
    console.log("Aluno aprovado.");
  } else if (media < 5.0) {
    console.log("Aluno reprovado.");
  } else if (5.0 <= media <= 6.9) {
    console.log("Aluno em exame.");
    console.log(`Nota do exame: ${parseFloat(notaExame).toFixed(1)}`);
    mediaFinalComExame = calculaMediaComExame(media, notaExame);
    mediaFinalComExame <= 4.9
      ? console.log("Aluno reprovado.")
      : console.log("Aluno aprovado.");
    console.log(`Media final: ${parseFloat(mediaFinalComExame).toFixed(1)}`);
  }
};

const calculaMedia = ([n1, n2, n3, n4]) => {
  return (n1 * 2.0 + n2 * 3.0 + n3 * 4.0 + n4 * 1.0) / 10.0;
};

const calculaMediaComExame = (media, notaExame) => {
  return (media + notaExame) / 2.0;
};

mostraNotaAluno(notas, notaExame);
