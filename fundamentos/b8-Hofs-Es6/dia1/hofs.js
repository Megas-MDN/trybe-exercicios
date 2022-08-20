const objGerados = (nomeCompleto) => ({ nome: nomeCompleto, email: `${nomeCompleto.replaceAll(' ', '')}@trybe.com` });

const newEmployees = (obj) => {
  const employees = {
    id1: obj('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: obj('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: obj('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees(objGerados));
const isEqual = (n1, n2) => (n1 === n2) ? true : false;

const hofCheck = (num, func) => {
  const nSorteado = Math.floor(Math.random() * 5) + 1;
  console.log(nSorteado);
  if (func(num, nSorteado)) {
    return `Parabéns você ganhou`;
  }
  return `Tente novamente`;
}

// console.log(hofCheck(5, isEqual));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const calcNota = (ans, gabarito) => {
  let nota = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    if (ans[i] !== 'N.A') {
      (isEqual(ans[i], gabarito[i])) ? nota += 1 : nota -= 0.5;
    }
  }
  return nota;
};

const hotHof = (ans, rAns, func) => func(ans, rAns);

console.log(hotHof(STUDENT_ANSWERS, RIGHT_ANSWERS,calcNota));