const sum = require('./sum.js');

describe('Testa a funação soma', () => {
    it('A soma de 4 e 5 retorna 9', () => {
        expect(sum(4,5)).toBe(9);
    });
    it('A soma de 0 e 0 retorna zero', () => {
        expect(sum(0,0)).toBe(0);
    });
    it('A função lança um erro quando passado uma string', () => {
        expect(() => {
            sum(4,'5');
        }).toThrowError('parameters must be numbers');
    })
});
