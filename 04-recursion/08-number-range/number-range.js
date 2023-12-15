function numberRange(start, end) {
  if (start === end) return [start];

  const numbers = numberRange(start, end - 1);
  numbers.push(end);

  return numbers;
}

module.exports = numberRange;
