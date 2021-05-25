import { convertToNumber } from './convertToNumber';

describe('convertToNumber function', () => {
  it('should convert a string starting number', () => {
    expect(convertToNumber('12')).toBe(12);
    // expect(convertToNumber('12 bonbons')).toBe(12);
    // expect(convertToNumber('   12 bonbons')).toBe(12);
  });
  it('should throw an error if convert is not possible', () => {
    expect(() => {
      convertToNumber('ABC');
    }).toThrowError(`Erreur : "ABC" n'est pas un nombre`);
  });
});
