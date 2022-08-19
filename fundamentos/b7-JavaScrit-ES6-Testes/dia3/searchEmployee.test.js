const searchEmployee = require('./searchEmployee.js');

describe('Testa a função de busca por info de um funcionário', () => {
    it('Verifica de',() => {
        expect(searchEmployee).toBeDefined()
    });
    it('Verifica se o erro no caso de id invalido',() => {
        expect(() => {
            searchEmployee()
        }).toThrow(('ID não identificada'));
    });
    it('Verifica se o erro no especificação errada',() => {
        expect(() => {
            searchEmployee('4456-4','naoExiste')
        }).toThrow(('Informação indisponível'));
    });
    it('Verifica se retorna a informação correta', () => {
        expect(searchEmployee('1256-4','lastName')).toBe('Bezos');
        expect(searchEmployee('9852-2-2','specialities')).toEqual(['Ruby', 'SQL']);
        expect(searchEmployee('4456-4','firstName')).toBe('Leila');
        expect(searchEmployee('5569-4','specialities')).toEqual(['Frontend', 'Redux', 'React', 'CSS']);
    });
})