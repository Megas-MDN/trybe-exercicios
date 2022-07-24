// 1

let  Marina = 22;
let  Silvia = 30;
let Iza = 5;

if(Marina < Silvia && Marina < Iza){
    console.log('Marina é a pessoa mais jovem e possui '+ Marina +  ' anos de idade');
} else if(Silvia < Iza){
    console.log('Silvia é a pessoa mais jovem e possui '+ Silvia +  ' anos de idade'); 
} else{
    console.log('Iza é a pessoa mais jovem e possui '+ Iza +  ' anos de idade'); 
}
 // 2
 /*
  - age: número maior que 0
 - sex: M ou F
 - weight: Em (kg) com número maior que 0
 - height: Em (cm) com número maior que 0
A fórmula para homens:
 - (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5
A fórmula para mulheres:
 - (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161
Imprima no terminal o resultado do cálculo no formato:
-----------------------------------
"A taxa metabólica basal é: x Kcal"
 */
let age = 30;
let sex = 'F'
let weight = 170;
let height = 70;
let BMR;

if(age > 0 && (sex === 'M' || sex==='F') && weight > 0 && height > 0){
    if(sex === 'M'){
        BMR = ((height * 6.25) + (weight * 9.99) - (age * 4.92) + 5);

    } else if(sex === 'F'){
        BMR = ((height * 6.25) + (weight * 9.99) - (age * 4.92) + 161);
    }
        else{
            console.log("Deu Muiiiitoooo errado");
        }


} else{
    console.log("Deu errado");
}
console.log("A taxa metabólica basal é: " + BMR + " Kcal");

console.log(`Teste ${BMR} mais teste`); // template