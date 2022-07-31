const inputs = document.getElementsByTagName('input');
const ps = document.getElementsByTagName('p');


function selecao(e){
    localStorage.setItem(e.target.id,e.target.value);
    switch(e.target.id){
        case "bg-color":
            console.log(e.target.value);
            document.getElementById('main-content').style.backgroundColor = e.target.value;
            break;
        case "txt-color":
            console.log(e.target.value);
            for (p of ps){
                p.style.color = e.target.value;
            }
            break;
        case "size-txt":
            console.log(e.target.value);
            for (p of ps){
                p.style.fontSize = e.target.value + 'px';
            }
            break;
        case "size-ln":
            console.log(e.target.value);
            for (p of ps){
                p.style.letterSpacing = e.target.value + 'px';
            }
            break;
        case "txt-family":
            console.log(e.target.value);
            for (p of ps){
                p.style.fontFamily = e.target.value;
            }
            break;
        case 'checkbox1':
            console.log(e.target.checked);
            if(e.target.checked){
                //localStorage.clear();
                document.querySelector('body').style.backgroundColor = 'black';
                document.querySelector('body').style.color = 'white';
                document.querySelector('#main-content').style.backgroundColor = 'black';
                document.querySelector('label').style.fontWeight = 700;
                for (p of ps){
                    p.style.color = 'white';
                }
                
                //localStorage.setItem(e.target.id,e.target.value);
            } else {
                localStorage.removeItem(e.target.id);
                document.querySelector('body').style.backgroundColor = 'white';
                document.querySelector('body').style.color = 'black';
                document.querySelector('label').style.fontWeight = 300;
                loadConfigs();
            }
            
            break;
    }
}

function addEventos(){
    for (let i of inputs){
        if(i.id == 'checkbox1'){
            i.addEventListener('click',selecao);
        } else {
            i.addEventListener('keydown',function(e){
                if (e.key == 'Enter'){
                    selecao(e);
                }
            });
        }
    }
}
function checkConfig(e,id){
    if(localStorage.getItem(id)){
        console.log(localStorage.getItem(id));
        e.target.value = localStorage.getItem(id);
        e.target.id = id;
        console.log(e);
        document.getElementById(id).value = e.target.value;
        selecao(e);
   }
}
function checkboxConfig(e,id){
    if(localStorage.getItem(id)){
        console.log(localStorage.getItem(id));
        e.target.checked = localStorage.getItem(id);
        e.target.id = id;
        console.log(e);
        document.getElementById(id).checked = e.target.checked;
        selecao(e);
   }
}
function loadConfigs(){
    let e = {
        target: {value: '',
                id: '',},     
    };
    console.log(localStorage);
    checkConfig(e,'bg-color');
    checkConfig(e,'txt-color');
    checkConfig(e,'size-txt');
    checkConfig(e,'size-ln');
    checkConfig(e,'txt-family');
    checkboxConfig(e,'checkbox1');
   
   
}
window.onload = function (){
    addEventos();
    loadConfigs();
}