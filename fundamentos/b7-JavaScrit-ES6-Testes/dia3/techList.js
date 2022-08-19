const techList = (arr, str) => {
    const aObj = [];
    if(arr.length > 0) {
        for(let val of arr.sort()) {
            const obj = {
                tech: val,
                name: str,
            };
            aObj.push(obj);
        }
        return aObj;
    } 
    return 'Vazio!';
}
//console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
module.exports = techList;