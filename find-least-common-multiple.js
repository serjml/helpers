function findLeastCommonMultiple(arr) {
  const max = Math.max(arr[0], arr[1]);
  const min = Math.min(arr[0], arr[1]);
  const array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }

  const maxLcm = array.reduce((acc, el) => acc * el);
  for (let lcm = max; lcm <= maxLcm; lcm += max) {
    let isLcm = true;
    array.forEach((el) => {
      if (lcm % el !== 0) {
        isLcm = false;
      }
    });

    if (isLcm) {
      return lcm;
    }
  }
}

console.log(findLeastCommonMultiple([2, 5]));
