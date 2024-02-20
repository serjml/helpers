// for
Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

//forEach
Array.prototype.myMap = function (callback) {
  const newArray = [];
  this.forEach((element, index, originalArr) =>
    newArray.push(callback(element, index, originalArr)),
  );
  return newArray;
};
