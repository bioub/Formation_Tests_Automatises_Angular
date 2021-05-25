import { genererAlea } from "./genererAlea";

describe('genererAlea function', () => {
  it('should generate random number', () => {
    spyOn(Math, 'random').and.returnValue(0.34);

    expect(genererAlea(0, 100)).toBe(34);

    expect(Math.random).toHaveBeenCalledTimes(1);
  });
});
