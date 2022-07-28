
let n = 5;
let linha = "";
let espaco = " ";
let ast = "*";
let ehPrimo = 23;
let quantidadeDivisores = 0;

if (n > 1) {
    for (let index = 1; index <= n; index += 1) {
        linha += "*";
    } 
    for (let index2 = 1; index2 <= n; index2 += 1) {
       // console.log(linha);
    } 
    }
    else {
       // console.log("insira um valor maior que 1.");
    }

    //ex2

linha = "";

    if (n > 1) {
        for (let index = 1; index <= n; index += 1) {
            linha += "*";
           // console.log(linha);
        }
    } 
    else {
        //console.log("insira um valor maior que 1.");
    }

   // ex3

    if (n > 1) {
        for (let index = 1; index <= n; index += 1) {
            linha = "";
            for (let indexAst = 1; indexAst <= index; indexAst += 1) {
                linha += "*"; 
            }
            if (index < n) {
            for (let indexEspaco = n - index; indexEspaco >= 1; indexEspaco -= 1) {
                linha = " " + linha; 
            }
        }
       // console.log(linha); 
        }
    } 
    else {
       // console.log("insira um valor maior que 1.");
    }

    //ex3 segundo modo mais simples

    if (n > 1) {
        for (let index = 1; index <= n; index += 1) {
     {
        linha = "";
        linha = " ".repeat(n - index) + "*".repeat(index);
        console.log(linha);
    }
        }
    }   
    else {
        console.log("insira um valor maior que 1.");
    }

    //ex4

    if (n > 1 && n % 2 !== 0) {
        linha = "";
        for (let index = 1; index <= n; index += 2) {
            linha = " ".repeat((n - index) / 2) + "*".repeat(index) + " ".repeat((n - index) / 2);
            console.log(linha);
        }
    }
    else    if (n > 2 && n % 2 === 0) {
        linha = "";
        for (let index = 2; index <= n; index += 2) {
            linha = " ".repeat((n - index) / 2) + "*".repeat(index) + " ".repeat((n - index) / 2);
            console.log(linha);
        }
    }
    else {
        console.log("adicione um numero maior que 2.");
    }

    //ex5

    if (n > 1 && n % 2 !== 0) {
        linha = "";
        for (let index = 1; index <= n; index += 2) {
            if (index === 1) {
                linha = " ".repeat((n - index) / 2) + "*" + " ".repeat((n - index) / 2);
                console.log(linha);
            }
        else if (index === n) {
            linha = "*".repeat(index);
            console.log(linha);
        }
        else {
            linha = " ".repeat((n - index) / 2) + "*" + " ".repeat(index - 2) + "*" + " ".repeat((n - index) / 2);
            console.log(linha);
        }
        }
    }
    else {
        console.log("adicione um numero ímpar maior que 1.");
    }

    //ex6

    if (ehPrimo > 1 && Number.isInteger(ehPrimo)) {
        quantidadeDivisores = 0;
    for (let index = 2; index <= ehPrimo; index += 1) {
        if (ehPrimo % index === 0) {
            quantidadeDivisores += 1;
        }
    }
    if (quantidadeDivisores === 1) {
        console.log("O número", ehPrimo, "é um número primo!" );
    }
    else {
        console.log("O número", ehPrimo, "não é um número primo!" );
    }
    }
    else {
        console.log("insira um número inteiro maior que um");
    }