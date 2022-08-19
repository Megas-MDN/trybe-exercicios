const myFizzBuzz = require('./myFizzBuzz');

describe('Testando a função myFizzBuzz', ()=> {
    it('Testando um numero divisivel por 3 e por 5', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    });
    it('Testando um numero divisivel por 3', () => {
        expect(myFizzBuzz(6)).toEqual('fizz');
    });
    it('Testando um numero divisivel por 5', () => {
        expect(myFizzBuzz(10)).toEqual('buzz');
    });
    it('Testando um numero não divisivel por 3 nem por 5', () => {
        expect(myFizzBuzz(13)).toEqual(13);
    });
})