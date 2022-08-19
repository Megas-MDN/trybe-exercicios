const {
    encode,
    decode,
} = require('./encodeDecode');

describe("Testa a função encode", () => {
    it('Verifica se encode e decode são funções', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });
    it('Encode troca corretamente a, e, i, o, u por 1, 2, 3, 4, 5', () => {
        expect(encode('a')).toEqual('1');
        expect(encode('e')).toEqual('2');
        expect(encode('i')).toEqual('3');
        expect(encode('o')).toEqual('4');
        expect(encode('u')).toEqual('5');
    });
    it('Encode troca corretamente 1, 2, 3, 4, 5 por a, e, i, o, u', () => {
        expect(decode('1')).toEqual('a');
        expect(decode('2')).toEqual('e');
        expect(decode('3')).toEqual('i');
        expect(decode('4')).toEqual('o');
        expect(decode('5')).toEqual('u');
    }); isNaN(Number('1'));
    it('Nao converter a letra b', () => {
        expect(isNaN(Number(encode('b')))).not.toEqual(NaN);
    });
    it('Verifica se o numero de caracteres é o mesmo', () => {
        expect(decode('oi').length).toEqual(2);
        expect(encode('12').length).toEqual(2);
    });

})