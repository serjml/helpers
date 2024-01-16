function curry(callback) {
  return function curried(...args) {
    if (args.length >= callback.length) {
      return callback(...args);
    }

    return curried.bind(this, ...args);
  };
}
