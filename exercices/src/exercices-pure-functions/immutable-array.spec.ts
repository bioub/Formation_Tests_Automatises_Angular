import { push } from "./immutable-array";

describe('immutable-array module', () => {
  describe('push function', () => {
    it('should add an element to the end and return new array', () => {
      const array = [1, 2, 3];
      const newArray = push(array, 4);
      expect(newArray).not.toBe(array); // 2 tableau différents en mémoire (comparé avec ===)
      expect(newArray).toEqual([1, 2, 3, 4]); // 2 tableau avec les mêmes valeurs (ou le même tableau)
    });
  });
});
