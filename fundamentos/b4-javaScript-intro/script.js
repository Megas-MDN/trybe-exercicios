//let age =29;

//console.log(age);
/*
const pat = {
    first: 'ana',
    last: 'santos'
}
console.log(typeof(pat));

const area = 5 *8;
console.log(area);

const nota = (Math.floor(Math.random()*100) + 1);
console.log(nota);
if(nota >= 80){
    console.log("Parabens aprovado");
}else if(nota >=60){
    console.log("Lista de espera");
}else{
    console.log("Reprovado");
}
console.log(!(2+2)===4);
*/
function soma(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function vez(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function rest(a, b) {
    return (a % b);
}
const c_a = (Math.floor(Math.random() * 20) + 1); 

const c_b = (Math.floor(Math.random() * 20) + 1);
const c_c = (Math.floor(Math.random() * 20) + 1);
console.log(c_a + " " + c_b + " " + c_c)
console.log("Soma " + soma(c_a, c_b));
console.log("Subtracao " + sub(c_a, c_b));
console.log("Multiplicacao " + vez(c_a, c_b));
console.log("Divisao " + div(c_a, c_b));
console.log("Resto " + rest(c_a, c_b));





function maior(a, b) {
    if (a >= b) {
        return a;
    }
    return b;
}
console.log("Maior entre2 " + maior(c_a, c_b));

function maior3(a, b, c) {
    if (a >= b) {
        if (a >= c) {
            return a;
        } else {
            return c;
        }
    } else if (c >= b) {
        return c;
    }
    return b;
}
console.log("Maior entre3 " + maior3(c_a, c_b, c_c));

const c_d = 0;//(Math.floor(Math.random()*10)) - (Math.floor(Math.random()*10));
console.log(c_d) //+ " " + c_b + " " + c_c)
function posNeg(d) {
    if (d > 0) {
        return "Positivo";
    } else if (d < 0) {
        return "Negativo";
    } else {
        return "Número zero!";
    }
}
console.log("Polaridade do número " + posNeg(c_d));

const aa = 90;
const ab = 45;
const ac = 45;

function angTri(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        if ((a + b + c) === 180) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Angulo invalido! ";
    }
}

console.log("Angulo de um triangulo " + angTri(aa, ab, ac));

let peca = "Rei";
function chess(p) {

    switch (p.toLowerCase()) {
        case "peao":
        case "peão":
            return "anda pra fentre, ataca na diagonal. ";
            break;
        case "torre":
            return "Anda na horizontal e vertical. ";
            break;
        case "cavalo":
            return "Anda em L e pula peças. ";
            break;
        case "bispo":
            return "Anda na diagonal. ";
            break;
        case "dama":
            return "Anda em todas as direções. ";
            break;
        case "rei":
            return "Anda uma casa em todas as direções. ";
            break;
        default:
            return "Peça não existente no Xadrez. ";
            break;
    }
}


console.log("Peça " + "Movimento " + chess(peca));

const nota = (Math.floor(Math.random() * 170) - 50);
console.log("Nota ::: " + nota);
function concep(n) {
    if (n > 100 || n < 0) {
        return "Nota fora dos criterios de avaliação ";
    } else if (n <= 100 && n >= 90) {
        return "Conceito A ";
    } else if (n >= 80) {
        return "Conceito B ";
    } else if (n >= 70) {
        return "Conceito C ";
    } else if (n >= 60) {
        return "Conceito D ";
    } else if (n >= 50) {
        return "Conceito E ";
    } else {
        return "Conceito F ";
    }


}
console.log("Conceito ::: " + concep(nota));

console.log(c_a + " " + c_b + " " + c_c)
function parimpar(a,b,c){
    if(a%2===0 || b%2===0 || c%2===0){
        return true;
    }
    return false;
}
console.log("Pelo menos  1par " + parimpar(c_a, c_b,c_c));

function parimpar2(a,b,c){
    if(a%2!==0 || b%2!==0 || c%2!==0){
        return true;
    }
    return false;
}
console.log("Pelo menos  1impar " + parimpar2(c_a, c_b,c_c));

const custo = 10;//(Math.floor(Math.random() * 121) - 20);
const venda = 11;//custo + (Math.floor(Math.random() * 201) + 20);
console.log(custo + " " + venda)
function product(c,v){
    if(c <= 0 || v <=0){
        return "Erro valores não aceitos. ";
    }
    if((v) - (1.2*c) <= 0){
        return ("Não há lucro. " + ((v) - (1.2*c)));
    }
    return ((v) - (1.2*c));
}
console.log("Lucro do produto " + product(custo,venda));

const sal =  (Math.floor(Math.random() * 11)+1)*1000;
console.log("Salario " + sal);

function salLiqui(s){
    if(s<0){
        return "Não é possivel calcular salário negativo. ";
    }

    let salLiq = 0;

    let in1 = 0.08;
    let in2 = 0.09;
    let in3 = 0.11;
    let in4 = 570.88;

    let ir1 = 0;
    let ir2 = 0.075;
    let d2 = 142.80;

    let ir3 = 0.15;
    let d3 = 354.80;

    let ir4 = 0.225;
    let d4 = 636.13;

    let ir5 = 0.275;
    let d5 = 869.36;

   if(s<=1556.94){
        salLiq = s*(1-in1);
   } else if(s<=2594.92){
        salLiq = s*(1-in2);
   }else if(s<=5189.82){
        salLiq = s*(1-in3);
   } else{
        salLiq = s -in4;
   }

   if(salLiq<=1903.98){
        return salLiq;
   }else if(salLiq<=2826.65){
        return (salLiq*(1-ir2)+d2);
   }else if(salLiq<=3751.05){
        return (salLiq*(1-ir3)+d3);
   }else if(salLiq<=4664.68){
        return (salLiq*(1-ir4)+d4);
   }else{
        return (salLiq*(1-ir5)+d5);
   }

}
console.log("Salario Líquido pós descontos" + salLiqui(sal));


