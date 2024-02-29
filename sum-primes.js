function sumPrimes(num) {
  function isPrime(n) {
    const sqrt = Math.sqrt(n);
    for (let i = 2; i <= sqrt; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  let sum = 0;
  let number = 2;
  while (number <= num) {
    if (isPrime(number)) {
      sum += number;
    }
    number++;
  }
  return sum;
}

console.log(sumPrimes(977));
