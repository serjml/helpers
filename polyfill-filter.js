Array.prototype.myFilter = function (callback, context) {
  if (!(this instanceof Array || this instanceof String)) {
    throw new TypeError(`Array.prototype.myFilter was called on wrong type`);
  }

  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }

  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, context)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
