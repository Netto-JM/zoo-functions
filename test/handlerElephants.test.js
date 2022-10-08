const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Se nenhum porâmetro foi passado, retorna "undefined"', () => {
    expect(handlerElephants()).toBeUndefined();
  });
});
