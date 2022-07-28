
function reverString(p){ //Inverte uma string 'exemplo'
    let vp = p.split(''); // separa a string e cria um array --  ['e','x','e', ... ,'l','o']
    vp = vp.reverse(); // inverte o array -- ['o','l', ... ,'e', 'x', 'e']
    //console.log(vp);
    return vp.join(''); // junta todos os caracteres do array em uma string -- 'olpmexe'
}

function verificaFimPalavra(word, endi){ // Recebe como parametro uma palavra word e uma string 'supostamente o fim da str'
    let ini = reverString(endi); // a variavel recebe a string 'final' invertida
    let wini = reverString(word); // a variavel recebe a palavra invertida
    for(let i = 0; i< ini.length; i+=1){ // esse for passa por cada caractere da string supostamente fim da word.
        if(ini[i] !== wini[i]){ // compara se o caracter da string final é diferente do caractere da palavra word
            return false; // Retorna fals
        }
    }
    return true; // se todos os caracteres da string 'final' forem verificados sem retornar false então a palavra é fim do word
}

//console.log(reverString('papibaquigrafo'));
console.log(verificaFimPalavra('Megas', 'agas'));