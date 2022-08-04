const combinacoes =[
    [0,1,2], // linha 1
    [3,4,5], // linha 2
    [6,7,8], // linha 3
    [0,3,6], // coluna 1
    [1,4,7], // coluna 2
    [2,5,8], // coluna 3
    [0,4,8], // diagonal esqueda direita
    [2,4,6] // diagonal direita esquerda
  ]

const divGrid = document.querySelector('.grid');
const player = document.querySelector('#player');
let flag = true;
function jogar(e){
    console.log('jogou', flag);
    if(flag){
        player.innerText = 'Vez do jogador 0';
        e.target.innerText = 'X';
    } else {
        player.innerText = 'Vez do jogador X';
        e.target.innerText = 'O';
    }
    flag = !flag; // true false true false
}

function criaDiv(){
    for (let index = 0; index < 9; index += 1){
        let div = document.createElement('div');
        div.className = 'celula';
        div.id = index;

        div.addEventListener('click', jogar);
        divGrid.appendChild(div);
    }
}
criaDiv();