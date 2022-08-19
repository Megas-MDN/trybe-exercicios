const valPar = (n) => (n % 2 === 0) ? true : false;

//console.log(valPar(3));

const somaPar = arr => {
    let result = 0;
    for(let val of arr) { // in in arr[index]
        (valPar(val)) ? result+=val : result = result;
    }
    return result;
}

//console.log(somaPar([1,2,3,4,2]));

const isNumber = num => (typeof num === 'number') ? true : false;

//console.log(isNumber(1));
const isString = str => (typeof str === 'string') ? true : false;
//console.log(isString('ddd'));
const ola = (user) => {
   if (isString(user) && user.length >= 1) {
    return `Boas vindas, ${user}!`;
   } 
   return `Parametro inválido`;
}

//console.log(ola('Nome'));

const velox = (time) => {
    if (isNumber(time)) {
        const g = 9.8;
        return time * g;
    }
    return `Parâmetro inválido!`;
}
//console.log(velox(10));

// function isZero(number) {
// 	if (number === 0) {
// 		return "Zero";
// 	}
// 	return "Not zero";
// }
const isZero = number => (number === 0) ? 'Zero' : 'Not zero';
//console.log(isZero(0));

const isArrei = (arr) => {
    if (Array.isArray(arr) && arr.length >= 1) {
        for(let i = 0; i < arr.length; i += 1) {
            for(let j = 0; j < arr.length; j += 1) {
                if (arr[i] !== arr[j]) {
                    return 'Valores diferentes'
                } 
            }
        }
     return `Valores iguais`;
    } 
    return `Parametro inválido`;
 }
 
 console.log(isArrei([]));