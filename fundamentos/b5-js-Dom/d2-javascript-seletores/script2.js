//console.clear()
// Acesse o elemento elementoOndeVoceEsta.
let elemento = document.getElementById("elementoOndeVoceEsta");
console.log(elemento);
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
elemento.parentElement.style.color = "red";
elemento.parentElement.style.border = "1px solid green";
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
elemento.firstChild.textContent = "new Texto";
// Acesse o primeiroFilho a partir de pai.
let elemPai = document.getElementById('pai');
console.log(elemPai.firstChild);
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(elemPai);
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(elemento.nextSibling.textContent);
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(elemento.nextElementSibling);
// Agora acesse o terceiroFilho a partir de pai.
console.log(elemPai.children[2]);
// Crie um irmão para elementoOndeVoceEsta.
let novaDiv = document.createElement('div');
novaDiv.innerText = "Novo conteúdo por uma div";
novaDiv.className = 'novaDiv';
elemPai.appendChild(novaDiv);
console.log(novaDiv)
// Crie um filho para elementoOndeVoceEsta.
let outraDiv = document.createElement('article');
outraDiv.innerHTML = "Um belo artigo, com muitas frases bonitas.";
outraDiv.className = 'BelaClasse';
elemento.appendChild(outraDiv);
// Crie um filho para primeiroFilhoDoFilho.
let maisDiv = document.createElement('div');
maisDiv.innerText ="Super divs....";
maisDiv.className = "SuperDiv";
elemento.firstElementChild.appendChild(maisDiv);
// A partir desse filho criado, acesse terceiroFilho.
// elemento.firstElementChild.firstElementChild.
let superDiv = document.getElementsByClassName("SuperDiv");
console.log(superDiv[0].parentElement.parentElement.nextElementSibling);
// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho
let elemPaidoPai = document.getElementById('paiDoPai');
let tercei = document.getElementById("terceiroFilho");
let quart = document.getElementById("quartoEUltimoFilho");
elemPai.lastChild.remove();
elemPai.removeChild(tercei);
elemPai.removeChild(quart);
elemPai.removeChild(elemento.nextSibling);
console.log(elemPai.lastChild);


