import { racineCarre } from './racineCarre';

describe('racineCarre function', () => {
  it('should compute sqrt', () => {
    expect(racineCarre(4)).toBe(2);
  });
  it('should throw an error sqrt if not possible', () => {
    expect(() => {
      racineCarre(-1);
    }).toThrowError(`nb must be positive`);
  });
});
