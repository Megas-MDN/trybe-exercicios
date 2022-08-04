// // SELETORES
// const INPUT_TEXT = document.querySelector("#input-text");
// const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
// const HREF_LINK = document.querySelector("#href");

// function noneDefault(e) {
//     e.preventDefault();
// }

// HREF_LINK.addEventListener('click', noneDefault);
// INPUT_CHECKBOX.addEventListener('click', noneDefault);
// INPUT_TEXT.addEventListener('keypress', (e) => {
//     if(e.key !== 'a') {
//         noneDefault(e);
//     }
// });
const sandy = document.getElementById('send');
const term = document.getElementById('termos');

term.addEventListener('click', (e) => {
    if(e.target.checked){
        //console.log('habilitou');
        sandy.disabled = false;
    } else {
        //console.log('desabilitou');
        sandy.disabled = true;
    }
});

sandy.addEventListener('click', (e) => {
    //e.preventDefault();
})