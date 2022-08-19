// Desafio 9

function encode(str) {
    // seu código aqui
    let vstr = str.split('');
    let arr = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < arr.length; i += 1) {
      for (let j = 0; j < vstr.length; j += 1) {
        if (vstr[j] === arr[i]) {
          vstr[j] = i + 1;
        }
      }
    }
  
    return vstr.join('');
  }
  function decode(str) {
    // seu código aqui
    let vstr = str.split('');
    let arr = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < arr.length; i += 1) {
      for (let j = 0; j < vstr.length; j += 1) {
        if (vstr[j] == i + 1) {
          vstr[j] = arr[i];
        }
      }
    }
  
    return vstr.join('');
}
//console.log(isNaN(Number('1')));
module.exports = {
    encode,
    decode,
}