export function promiseRandomTimeout(value: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, Math.floor(Math.random() * 10000));
  });
}


// promiseRandomTimeout('ABC').then((val) => expect(val).toBe('ABC'))
