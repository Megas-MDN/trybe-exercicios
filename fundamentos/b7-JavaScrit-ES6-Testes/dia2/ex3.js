const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const addChaVal = (obj, chave, valor) => {
    obj[chave] = valor;
}
addChaVal(lesson2, 'turno', 'tarde');
//console.log(lesson2);
const listaKeys = obj => Object.keys(obj);
const listaValues = obj => Object.values(obj);
//console.log(listaValues(lesson1));

const copyObj = obj => {
    const objCopia = Object.assign({},obj);
    return objCopia;
}

const allLessons = {
    'lesson1': copyObj(lesson1),
    'lesson2': copyObj(lesson2),
    'lesson3': copyObj(lesson3),
}
//allLessons.lesson3.materia = 'física';
//console.log(allLessons);
//console.log(lesson3);

const numTotEstudy = obj => {
    let cont = 0;
    for(let i in obj){
        cont += obj[i].numeroEstudantes;
    }
    return cont;
}

//console.log(numTotEstudy(allLessons));
const getValueByNumber = (obj, index) => {
    return obj[Object.keys(obj)[index]];
}

//console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const verifyPair = (obj, chave, valor) => {
    const chavExiste = listaKeys(obj).includes(chave);
    const valorExiste = listaValues(obj).includes(valor);
    if (chavExiste && valorExiste && obj[chave] === valor) {
        return true;
    }
    return false;
}

//console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
//console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

const mathAlunos = (obj, chav, valor) => {
    let cont = 0;
    for (let i in obj) {
        (obj[i][chav] === valor) ? cont += obj[i]['numeroEstudantes'] : cont = cont;
    }
    return cont;
}

// console.log(mathAlunos(allLessons, 'materia', 'Matemática'));
const createReport = (obj, nome) => {
    const objeto = {
    'professor': nome,
    'aulas': [],
    'estudantes': 0,
};
    for (let i in obj) {
        if (obj[i].professor === nome) {
            objeto.aulas.push(obj[i].materia);
            objeto.estudantes += obj[i].numeroEstudantes;
        }
    }
    return objeto;
}

console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */