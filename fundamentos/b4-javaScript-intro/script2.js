/*let x = Math.ceil(Math.random());
let c = 0;
do{
    console.log(x);
    x = Math.ceil(Math.random()*10);
    c++;
}while(c<100) */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//1 - Bonus ordenado
//let test = 0;
for(n of numbers.sort(function(a,b){return (a -b)})){
    console.log(n);
    //test+=n;
}
//2
function soma(a,b){
    return a+b;
}

function somaArray(arr){
    let sum = 0;
    for(n of arr){
        sum=soma(sum,n);
    }
    return sum;
}
console.log("Soma dos numeros do Array :: "+somaArray(numbers));
//3
console.log("Média aritimética do Array :: "+(somaArray(numbers))/(numbers.length));
//4
if((somaArray(numbers))/(numbers.length) > 20){
    console.log("Valor maior que 20. ");
} else{
    console.log("Valor menor ou igual a 20. ");
}
//5
function maxAr(arr){
    let maxy;
    for(let i =0;i<arr.length;i+=1){
        
        if(i ===0){
            maxy = arr[i];
        }else{
            if(arr[i] > maxy){
                maxy = arr[i];
            }
        }
    }
    return maxy;
}
console.log("O maior numero do array é :: " + maxAr(numbers));
//6
function qtdImpar(arr){
    let c = 0;
    for(a of arr){
        if(a % 2 !== 0){
            c+=1;
        }
    }
    if(c === 0){
        return "Nenhum valor ímpar encontrado";
    } else{
        return c;
    }
}
console.log("Quantidades de números impares  :: " + qtdImpar(numbers));
//7
function minAr(arr){
    let maxy;
    for(let i =0;i<arr.length;i+=1){
        
        if(i ===0){
            maxy = arr[i];
        }else{
            if(arr[i] < maxy){
                maxy = arr[i];
            }
        }
    }
    return maxy;
}
console.log("O menor numero do array é :: " + minAr(numbers));
//8
let arr25=[];

for(let i=1;i<=25;i+=1){
    arr25.push(i);
    console.log("Número :: "+arr25[i-1]);
}
//9
for(let n = 0;n<arr25.length;n+=1){
    console.log("Número dividido por 2 :: "+arr25[n]/2);
}
console.log(arr25.length);

////// Para ajudar no Bonus
function exibeArray(arr){
    for(let i = 0;i<arr.length;i+=1){
        console.log("Número no Array :: "+arr[i]);
    }
}
//// copiar array
function copyArr(arr){
    let arrm = [];
    for(let i of arr){
        arrm.push(i); // copiar todos os elementos
        
    }
    //console.log(arrm);
    return arrm;
}
//// Bonus
let numb = [5,9,3,19,70,8,100,2,35,27];
//let numb = [7,2,1,4];

function ordenaMM(arr,f=false){
    //console.log(arr);

    for(let i = 0;i<arr.length-1;i+=1){
        for(let j = i+1; j<arr.length;j+=1){
            if(f === true){ // Ordenaçao crescente do menor pro maior
                if(arr[i] > arr[j]){
                    //console.log(arr[i]+" Vai trocar com " + arr[j]);
                    let swaps = arr[j];
                    arr[j] = arr[i];
                    arr[i] = swaps;
                } else{
                   // console.log(arr[i]+" NAO Vai trocar com " + arr[j]);
                }

            } else{ //ordenacao decrescente do maior para o menor
                if(arr[i] < arr[j]){
                    //console.log(arr[i]+" Vai trocar com " + arr[j]);
                    let swaps = arr[j];
                    arr[j] = arr[i];
                    arr[i] = swaps;
                } else{
                   // console.log(arr[i]+" NAO Vai trocar com " + arr[j]);
                }
            }         
        }
    }
    return arr;
}
//Bonus 1
//função ordernaMM por default começa na ordem Decrescente
exibeArray(ordenaMM(copyArr(numb),true));
//Bonus 2
exibeArray(ordenaMM(copyArr(numb),false)); // false nao nescessario
//Bonus 3
//let numb2 = [5,9,3,19,70,8,100,2,35,27];
//console.log(numb2);
function multiplicaElementosArray(arr){
    let arrm = [];
    for(let i = 0; i< arr.length;i+=1){
        if(arr[i] === arr[arr.length-1]){
            arrm.push(arr[i]*2);
        } else{
            arrm.push(arr[i] * arr[i+1]);
        }
    }
    return arrm;
}

exibeArray(multiplicaElementosArray(numb));
//console.log(multiplicaElementosArray(numb));
//console.log(numb2)
/**/