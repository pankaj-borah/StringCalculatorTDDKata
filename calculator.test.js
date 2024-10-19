const { add } = require('./calculator');

test('empty string should return 0', () => {
  expect(add("")).toBe(0);
});

test('single number should return the number itself', () => {
    expect(add("1")).toBe(1);
  });
  
  test('two numbers should return their sum', () => {
    expect(add("1,2")).toBe(3);
  });
