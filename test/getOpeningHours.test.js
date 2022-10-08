const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const hours = {
    Tuesday: {
      open: 8,
      close: 6,
    },
    Wednesday: {
      open: 8,
      close: 6,
    },
    Thursday: {
      open: 10,
      close: 8,
    },
    Friday: {
      open: 10,
      close: 8,
    },
    Saturday: {
      open: 8,
      close: 10,
    },
    Sunday: {
      open: 8,
      close: 8,
    },
    Monday: {
      open: 0,
      close: 0,
    },
  };

  test('getOpeningHours deve exister e ser uma função', () => {
    expect(getOpeningHours).toBeInstanceOf(Function);
  });

  test('O horário precisam ter a formatação adequada, um erro deve ser retornado em caso contrário', () => {
    expect(() => getOpeningHours('tuesday', '3:3r-DF')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('fRiday', 'f4:00-45')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('sunday', '22:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('monday', '04:86-AM')).toThrow('The minutes must be between 0 and 59');
  });

  test('as nomenclatura das horas deve ser no formato "AM" e "PM", um erro deve ser retornado em caso contrário', () => {
    expect(() => getOpeningHours('Sunday', '3:00-QM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('saturday', '3:00-45')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  test('se nenhum parâmetro for passado, deve retornar o objeto apropriado', () => {
    expect(getOpeningHours()).toEqual(hours);
  });

  test('se ambas strings passadas forem válidas, retornar a informação apropriada', () => {
    expect(getOpeningHours('Sunday', '3:00-PM')).toBe('The zoo is open');
    expect(getOpeningHours('thursday', '11:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('mOnDay', '10:00-AM')).toBe('The zoo is closed');
  });
});
