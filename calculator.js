function add(numbers) {
  if (numbers === "") return 0;
  if (numbers.includes(",")) {
    const nums = numbers.split(",").map(Number);
    return nums.reduce((sum, num) => sum + num, 0);
  }
  return Number(numbers);
}

module.exports = { add };