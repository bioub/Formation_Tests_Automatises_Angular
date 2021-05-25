import { hello } from "./hello";

describe('hello function', () => {
  it('should return hello followed by param', () => {
    expect(hello('Romain')).toBe('Hello Romain');
  });
});
