function selectFromInterval(arr, num1, num2) {
  if (!Array.isArray(arr)) throw new Error(`${arr} не является массивом`);

  if (arr.some((el) => typeof el !== 'number')) {
    throw new Error(`[${arr}] должен содержать только числа`);
  }
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    throw new Error(`границы интервала должны быть целым числом`);
  }

  const start = Math.min(num1, num2) - 1 < 1 ? 0 : Math.min(num1, num2) - 1;
  const end = Math.max(num1, num2);
  return arr.slice(start, end);
}
