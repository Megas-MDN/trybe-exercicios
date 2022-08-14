const btn = document.getElementById('btn');
const pCont = document.getElementById('pcont');
let contador = 0;

btn.addEventListener('click', () => {
    contador += 1;
    pCont.innerText = contador;
});