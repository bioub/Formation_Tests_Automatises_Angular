import { comparer } from "./comparer";

describe('comparer function', () => {
  it('should return Trop Petit', () => {
    expect(comparer(1, 2)).toBe("Trop petit");
  });
  it('should return Trop Grand', () => {
    expect(comparer(2, 1)).toBe("Trop grand");
  });
  it('should return Gagné', () => {
    expect(comparer(2, 2)).toBe("Gagné");
  });
});
