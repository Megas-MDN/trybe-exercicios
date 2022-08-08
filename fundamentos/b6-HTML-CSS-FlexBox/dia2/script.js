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