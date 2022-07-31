// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     6: 'sexta',
//     7: 'sábado',
//     };
    
//    // diasDaSemana.'1'; // SyntaxError: Unexpected number
//     console.log(diasDaSemana[1]); // domingo

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
};
function exibirPlayer(player){
    console.log(`A Jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`);
    player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
    // console.log(player.bestInTheWorld);
    console.log(`A Jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo ${(player.bestInTheWorld).length} vezes`);
    console.log(`A Joogadora possui ${player.medals.golden} de ouro e ${player.medals.silver} de prata`);
}
//exibirPlayer(player);
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

function olaNomes(names){
    for(let i in names){
        console.log(`Olá ${names[i]};`);
    }
}
//olaNomes(names);
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

function exibeChaveValor(obj){
    for(let i in obj){
        console.log(`Chave --> ${i} :: ${obj[i]} <-- valor`);
    }
}
//exibeChaveValor(car);

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
// 1
//console.log('Bem-vinda ' + info.personagem);

// 2
info['recorrente'] = 'Sim';
//console.log(info);

//3
function chavesObj(obj){
    for(let i in obj){
        console.log(i);
    }
}
//chavesObj(info);

//4
function valoresObj(obj){
    for(let i in obj)
        {console.log(obj[i]);}
}
//valoresObj(info);

//5
let info2 = [{
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  }, {
    personagem:  'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',

  }];

function arrObj(info){
    for(let i in info[0]){
        if(info2[0][i] === 'Sim' && info[1][i] === 'Sim'){
            console.log('Ambos recorrentes');
        }else{
            console.log(info[0][i], 'e',info[1][i]);
        }
        
    }

}

//arrObj(info2);
// 6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

//console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama \'${leitor.livrosFavoritos[0].titulo}\'.`);

newLivro = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
  leitor.livrosFavoritos.push(newLivro);
  //console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos.`);

//<<<<<<<<<<<<<<<<<---------- PARTE 2 -------------------->>>>>>>>>>>>>>>
// let str = 'The quick brown fox jumps over the lazy dog.';
// let arr = [];
// arr = str.split(' ');
// console.log(arr);
// console.log(arr.join(' '));

//1


function reverString(p){ // --------------------*********************************

    let vp = p.split('');
    vp = vp.reverse();
    return vp.join('');
}
//console.log(reverString('asac'));
function isPalindromo(p){
    if(p === reverString(p)){
        console.log(p,"é palindromo.");
    }else{
        console.log(p,"não é palindromo.");
    }
}
//isPalindromo('arara');

//2

let arr = [2, 3, 6, 7, 10, 1];

function maxNum(arr, f=true){
    let max;
    let cont = 0;
    let i;
    while(cont < arr.length){
        if(cont === 0){
            max = arr[cont];
            i = cont;
        }else{
            if((f && (max < arr[cont])) || (!f && (max > arr[cont]))){
                max = arr[cont];
                i = cont;
            }
        }
        cont+=1;
    }
    return i;
}
//console.log(`O maior número é ${arr[maxNum(arr)]} na posição ${maxNum(arr)} do array`);

// 3
let arr2 = [2, 4, 6, 7, 10, 0, -3];
//console.log(`O menor número é ${arr2[maxNum(arr2,false)]} na posição ${maxNum(arr2,false)} do array`);
// 4
let arr4 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Melquisedeque'];
function maiorCarac(arr){
    let cont = 0;
    let nome = '';
    for(let val of arr){
        if(cont < val.length){
            cont = val.length;
            nome = val;
        }
    }
    return [nome, cont];
}
//console.log(`O nome ${maiorCarac(arr4)[0]} é o nome com maior carcteres ${maiorCarac(arr4)[1]} no total.`);


// 5
let arr3 = [2, 3, 2, 5, 8, 2, 3];

function repet(arr,n){
    let cont = 0;
    for(let v of arr){
        if(v === n){
            cont+=1;
        }
    }
    return cont;
}
function maisRepete(arr){
    let num;
    let cont = 0;
    let c2;
    for(let val of arr){
        c2 = repet(arr,val);
        //console.log(c2); // conta qnts vezes o numero aparece
        if(cont < c2){
            cont = c2;
            num = val; 
        }
    }
    return [num, cont]; // retorna o numero q se repete mais e o cont é a qtd de vezes
}

console.log(`O numero que mais se repete é o ${maisRepete(arr3)[0]} :: ${maisRepete(arr3)[1]} vezes.`);


// 6
let nat = 5;

function somaNatural(n){
    let cont = 0;
    if(n<0){
        console.log('Esta função nao soma numeros negativos');
        return 'Esta função nao soma numeros negativos';
    }else{
        for(let i=1;i<=n;i+=1){
            cont+=i;
        }
    }
    return cont;
}
//console.log(`Soma do numeros de 1 até ${nat} é ${somaNatural(nat)} `);


//7 --------------------------------- ***********************************************

function verificaFimPalavra(word, endi){
    let ini = reverString(endi);
    let wini = reverString(word);
    for(let i = 0; i< ini.length; i+=1){
        if(ini[i] !== wini[i]){
            return false;
        }
    }
    return true;
}

//console.log(verificaFimPalavra('Megas', 'agas'));
// funcao para ajudar n
function somaArray(arr){
    let soma = 0;
    for(val of arr){
        soma+=val;
    }
    return soma;
}

// >>>>>>>>> BONUS <<<<<<<<<<<<<<
// 1
let nRoma = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

let numRomano = 'LXXXIV'; //84

function convert(str,nR){
    let vetStr = str.split('');
    let romaConvert = [];
    //console.log(vetStr);
    for(let i =0;i<vetStr.length;i+=1){
        if(nR[vetStr[i]] > 0){
            //console.log(nR[vetStr[i]]);
            romaConvert.push(nR[vetStr[i]]);
        }
    }
    return (romaConvert);

}
convert(numRomano,nRoma);

function calcRoma(arr){
    //let soma = arr[0];
    let num = arr[0];
    for(let i = 1;i<arr.length;i+=1){
        if(num < arr[i]){ // compara o número da frente e troca o sinal do de trás se for menor q o da frente
            arr[i-1] = -arr[i-1];
            //console.log("Menor",num, arr[i]);
        }
        num = arr[i];
    }
    console.log(arr);
   return somaArray(arr);
}

//console.log("O número romano",numRomano,"é igual a", calcRoma(convert(numRomano,nRoma)));
// 
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(v){
    let arrPar = [];
    for(let i = 0; i< v.length;i+=1){
        for(let j = 0; j< v[i].length; j+=1){
            if(v[i][j] % 2 === 0){
                arrPar.push(v[i][j])
                //console.log(v[i][j]);
            }
        }
    }
    return arrPar;
}
//console.log(arrayOfNumbers(vector));

//3
const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

  function isThere(arr,e){// retorna true se encontrar o elemento no array / false se n achar
    if(arr == []){
        return false;
    }else{
        for(let val of arr){
            if(val === e){
                return true;
            }
        }
    }
    return false;
  }
  //let fruits = [];
  //console.log(isThere(fruits,'e'));
  function carregaFrutas(arr){
    let fruits = [];
        for(let val of arr){
            if(!isThere(fruits,val)){
                fruits.push(val);
            }
        }
        return fruits;
  }
 // console.log(carregaFrutas(basket))
 function contaFrutas(arr,cesta){
    let cont = 0;
    let obj = {};
    for(let i=0;i<arr.length;i+=1){
        for(let j =0;j<cesta.length;j+=1){
            if(arr[i] === cesta[j]){
                cont+=1;
            }
        }
        if(cont < 2){
            obj[arr[i]] = cont;
        } else {
            obj[arr[i]+'s'] = cont;
        }
        cont = 0;
    }
    return obj;
 }
 //contaFrutas(carregaFrutas(basket),basket);
 function concatObj(obj){
    let strObj = '';
   //console.log(Object.keys(obj)[Object.keys(obj).length - 1]);
    for(let i in obj){
        //console.log(obj[i]);
        if(i === Object.keys(obj)[Object.keys(obj).length - 1]){ // coloca o 'e xxx.' (ponto final na frase)
            let nStrObj = strObj.slice(0, strObj.length-2); // Retira os 2 ultimos caracteres da frase
            strObj =nStrObj+ ' e ' +(obj[i] + ' ' + i + '.');
        } else{
            strObj += (obj[i] + ' ' + i + ', ');
        }
       
    }
    return (strObj);
 }
 //console.log('Sua cesta possui: '+ concatObj(contaFrutas(carregaFrutas(basket),basket)));

 // 4
 let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  }; 
//console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[moradores.blocoDois.length -1].nome} ${moradores.blocoDois[moradores.blocoDois.length -1].sobrenome} mora no ${moradores.blocoDois[moradores.blocoDois.length -1].andar}º, apartamento ${moradores.blocoDois[moradores.blocoDois.length -1].apartamento}.`);

//5

function nomeSobrenome(arr){
    for(let i =0;i<arr.length;i+=1){
        console.log(arr[i].nome, arr[i].sobrenome);
    }
}
//nomeSobrenome(moradores.blocoUm);
//nomeSobrenome(moradores.blocoDois);


 



