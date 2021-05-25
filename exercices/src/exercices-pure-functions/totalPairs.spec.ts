import { totalPairs } from "./totalPairs";

describe('totalPairs function', () => {
  it('should return the number of even elements in array', () => {
    expect(totalPairs([])).toBe(0);
    expect(totalPairs([2, 3, 4, 5, 6])).toBe(3);
  });
});
