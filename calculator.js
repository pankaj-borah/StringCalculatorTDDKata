function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /[,\n]/; // Default delimiters
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].substring(2)); // Custom delimiter
    numbers = parts[1]; // The rest is the numbers
  }
  
  const nums = numbers.split(delimiter).map(Number);
  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };