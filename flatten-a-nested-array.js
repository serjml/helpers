// 1. forEach
function steamrollArray(arr) {
  const res = [];

  arr.forEach((el) => {
    if (Array.isArray(el)) {
      res.push(...steamrollArray(el));
    } else {
      res.push(el);
    }
  });

  return res;
}

// 2. concat
function steamrollArray(arr) {
  const flat = [].concat(...arr);
  console.log(flat);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
