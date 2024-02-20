//for
Array.prototype.myFilter = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

//forEach
Array.prototype.myFilter = function (callback) {
  const newArray = [];
  this.forEach((elem, index, array) => {
    if (callback(elem, index, array)) {
      newArray.push(elem);
    }
  });

  return newArray;
};
