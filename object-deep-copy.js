function makeObjectDeepCopy(obj) {
  let clone = {};

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      clone[key] = makeObjectDeepCopy(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }
  return clone;
}
