const hydrate = (str) => {
    arr = str.split(' ');
    let cont = 0;
    for(let val of arr){
        if(parseInt(val)) {
            cont += parseInt(val);
        }
    }
    if(cont > 1) {
        return `${cont} copos de água`;
    } 
    return `${cont} copo de água`;
}

module.exports = hydrate;