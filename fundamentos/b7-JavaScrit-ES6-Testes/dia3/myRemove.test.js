const myRemove = require('./myRemove');

describe("Testando a função Remove item do array", () => {
    it('Verifica se myRemove([1, 2, 3, 4], 3) retorna o array sem o 3', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4]);
    });
    it('Verifica se myRemove([1, 2, 3, 4], 3) não retorna o array [1,2,3,4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1,2,3,4]);
    });
    it('Verifica se myRemove([1, 2, 3, 4], 5) retorna o array [1,2,3,4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1,2,3,4]);
    })
})