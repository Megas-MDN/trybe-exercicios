function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function pega(p1,p2){

    switch(p1){
        case 'id':
            return document.getElementById(p2);
        case 'class':
            return document.getElementsByClassName(p2);
        case 'tag':
            return document.getElementsByTagName(p2);
        case 'query':
            return document.querySelector(p2);
        case 'qAll':
            return document.querySelectorAll(p2);
        case 'create':
            return document.createElement(p2); 
        default:
            return 'erro';       
    }
}

function createElemento(tag, str, pai, classe) {
    let elemento = pega('create',tag);
    elemento.innerText = str;
    elemento.className = classe;
    pai.appendChild(elemento);
}
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDays(element, arr) {
    //console.log(element);
    for (let i of arr) {
        createElemento('li', i, element, 'day');
    }

}

//createDays(document.getElementById('days'), decemberDaysList);
createDays(pega('id','days'), decemberDaysList);
let holidays = [24, 25, 31];
let sextas = [4, 11, 18, 25];

function addClassSeIgual(arr, feriado, classe) {
    for (let i = 0; i < feriado.length; i += 1) {
        for (let j = 0; j < arr.length; j += 1) {
            if (arr[j].innerText == feriado[i]) {
                arr[j].classList.add(classe);
            }
        }
    }
}

//const dias = document.querySelectorAll(".day");
const dias = pega('qAll',".day");
//console.log(dias);
addClassSeIgual(dias, holidays, 'holiday');
addClassSeIgual(dias, sextas, 'friday');


function criaBotao(tag,id,text){
    let btn = pega('create',tag);
    btn.id = id;
    btn.innerText = text;
    return btn;
}

function coloqueBotao(id,text,cPai){
    const divBtn = criaBotao('button',id,text);
    pega('class',cPai)[0].appendChild(divBtn);
}
coloqueBotao('btn-holiday','Feriados','buttons-container');

//console.log(divBtn);

let flag = true;
let flag2 = true;
function mudaCor(elemento,cor){
    if(flag){
        elemento.style.background = cor;
    } else {
        elemento.style.background = 'rgb(238,238,238)';
    }
}
let sext = [];
function mudaTexto(elemento,txt){
    if(flag2){
        sext.push(elemento.innerText);
        elemento.innerText = txt;
    } else {
        elemento.innerText = sext.shift();
    }

}
function clickFeriado(){
    let arr = pega('class','holiday');
    for (let i = 0; i < arr.length; i += 1){
        mudaCor(arr[i],'red');
    }
    flag = !flag;
}
function addCLick(btn){
    btn.addEventListener('click',clickFeriado);
}
addCLick(pega('id','btn-holiday'));

coloqueBotao('btn-friday','Sexta-feira','buttons-container');

function clickSextou(){
    let arr = pega('class','friday');
    for (let i = 0; i < arr.length; i += 1){
        mudaTexto(arr[i],'SEXTOU');
    }
    flag2 = !flag2;
}

function addCLick2(btn){
    btn.addEventListener('click',clickSextou);
}
addCLick2(pega('id','btn-friday'));


function bigSizeMe(e){
    //console.log(e.target.style.width, e.target.style.height, 'entrou');
    e.target.style.fontSize = '30px';
    e.target.style.fontWeight  = '550';

    
}
function normSizeMe(e){
    //console.log(e.target.style.width, e.target.style.height,'saiu');
    e.target.style.fontSize = '20px';
    e.target.style.fontWeight  = '200';
    
}

function addEvent(arr){
    for (let i = 0; i < arr.length; i += 1){
       // console.log(arr[i]);
        arr[i].addEventListener('mouseover',bigSizeMe);
        arr[i].addEventListener('mouseout',normSizeMe);
    }
}
addEvent(pega('qAll','.day'));

function tarefa(str){
    //console.log(pega('class','my-tasks')[0]);
    createElemento('span', str, pega('class','my-tasks')[0], 'sp');
}
function legendaTask(cor){
    createElemento('div', '', pega('class','my-tasks')[0], 'task');
    let arr = pega('class','task');
    for (let i = 0; i < arr.length; i += 1){
        arr[i].style.backgroundColor = cor;
    }
}
tarefa('cozinhar');
legendaTask('yellow');

function addEventSelect(arr){
    for (let i = 0; i < arr.length; i += 1){
        // console.log(arr[i]);
         arr[i].addEventListener('click',function (e){
            if(e.target.className === 'task selected'){
                e.target.classList.remove('selected');
            } else {
                e.target.classList.add('selected');
            }

         });
     }
}
addEventSelect(pega('class','task'));

function mudaCorDia(arr){
    for (let i = 0; i < arr.length; i += 1){
        arr[i].addEventListener('click', function (e){
            let taskSelect = pega('class','task');
                if(e.target.style.color == taskSelect[0].style.backgroundColor){
                    e.target.style.color = 'rgb(119,119,119)';
                    //console.log('verdade');
                } else if(taskSelect[0].className === 'task selected') {
                    //console.log('mentira',e.target);        
                    e.target.style.color = taskSelect[0].style.backgroundColor;
                }
            
        });

    }

}

mudaCorDia(pega('qAll','.day'))