import { timeoutUpper } from "./timeoutUpper";

describe('timeoutUpper function', () => {
  beforeEach(() => {
    jasmine.clock().install();
  });
  afterEach(() => {
    jasmine.clock().uninstall();
  });
  it('should call cb after 1s', () => {
    const spy = jasmine.createSpy();
    timeoutUpper('abc', spy);
    jasmine.clock().tick(1000);
    expect(spy).toHaveBeenCalledWith('abc');
  });
});
