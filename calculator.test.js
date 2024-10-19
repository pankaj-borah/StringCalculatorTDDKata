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

test('handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('support custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('throw an error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
});