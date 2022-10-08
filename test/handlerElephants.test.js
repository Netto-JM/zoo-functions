const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
  const residentsInfo = [{
    name: 'Ilana',
    sex: 'female',
    age: 11,
  },
  {
    name: 'Orval',
    sex: 'male',
    age: 15,
  },
  {
    name: 'Bea',
    sex: 'female',
    age: 12,
  },
  {
    name: 'Jefferson',
    sex: 'male',
    age: 4,
  },
  ];

  test('handlerElephants deve exister e ser uma função', () => {
    expect(handlerElephants).toBeInstanceOf(Function);
  });

  test('se nenhum porâmetro foi passado, retorna "undefined"', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  test('se uma string não for passada como parâmetro, retorna uma mensagem alertando parâmetro inválido', () => {
    const alertInvalidParameter = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(null)).toBe(alertInvalidParameter);
    expect(handlerElephants(true)).toBe(alertInvalidParameter);
    expect(handlerElephants(123)).toBe(alertInvalidParameter);
    expect(handlerElephants([])).toBe(alertInvalidParameter);
  });

  test('se uma string inválida foi passada, retorna "null"', () => {
    expect(handlerElephants('')).toBeNull();
    expect(handlerElephants('iD')).toBeNull();
    expect(handlerElephants('test')).toBeNull();
    expect(handlerElephants('notAProperty')).toBeNull();
  });

  test('se uma string válida foi passada, retorna o valor apropriado', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('id')).toBe(elephantsId);
    expect(handlerElephants('name')).toBe('elephants');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('residents')).toEqual(residentsInfo);
  });
});
