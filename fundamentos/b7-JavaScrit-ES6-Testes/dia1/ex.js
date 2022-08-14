//  1

function testingScope(escopo) {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
     // console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
     // console.log(elseScope);
    }
   // console.log(`${ifScope}  o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
  }

  testingScope(false);

// 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2,40];

const sortOddsAndEvens = () => {
    
    for (let i = 0; i < oddsAndEvens.length -1; i++) {
        let swap = oddsAndEvens[i];
       // console.log('num da vez',swap);
        for (let j = i + 1; j < oddsAndEvens.length; j++) {
            //const element = oddsAndEvens[j];
            if (swap < oddsAndEvens[j]) {
              //  console.log(oddsAndEvens[j]);
                swap = oddsAndEvens[j];
               // console.log(swap);
                oddsAndEvens[j] = oddsAndEvens[i];
               // console.log('mod',oddsAndEvens[j]);
                oddsAndEvens[i] = swap;
             //   console.log('trocado',oddsAndEvens[i]);
            }
        }
        
    }
// Seu código aqui.
//console.log(oddsAndEvens);

};
//sortOddsAndEvens();
//console.log(oddsAndEvens); // será necessário alterar essa linha 😉
//console.log(oddsAndEvens.sort((a,b) => {a - b}));

// 1 p2
const fatorial = (n, result=1) => (n<=1) ? `O fatorial é ${result}` : fatorial(n-1, result*n);
//console.log(fatorial(4));

const longestWord = (str) => {
    const arr = str.split(' ');
    

    for (let i = 0; i < arr.length -1; i++) {
        let maior = arr[i];
       // console.log('num da vez',swap);
        for (let j = i + 1; j < arr.length; j++) {
            //const element = oddsAndEvens[j];
            if (maior.length < arr[j].length) {
              //  console.log(arr[j]);
                maior = arr[j];
               // console.log(swap);
                arr[j] = arr[i];
               // console.log('mod',arr[j]);
                arr[i] = maior;
             //   console.log('trocado',arr[i]);
            }
        }
        
    }
    //arr.sort();
    return arr[0];
}

//console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu');

const substituaX = (nome) => {
    const frase = 'Tryber x aqui!'
    return `${frase.split(' x ')[0]} ${nome} ${frase.split(' x ')[1]}`;
}

const minhasSkills = (str) => {
    const skills = ['html', 'javascript', 'css'];
    let str2 = 'Minhas três principais habilidades são:';
    return `${str}
    ${str2}
    * ${skills[0]}
    * ${skills[1]}
    * ${skills[2]}`
}

//console.log(minhasSkills(substituaX('Megas')));

//console.log(oddsAndEvens);
//console.log(Object.values(oddsAndEvens));

