const myIterible = {
  from: 1,
  to: 4,

  [Symbol.iterator]() {
    if (this.from > this.to) {
      throw new Error('Error: "from" more than "to"');
    }

    if (!Number.isFinite(this.from) || !Number.isFinite(this.to))
      throw new Error('Error: "from" and "to" should be a number');

    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return {
            done: false,
            value: this.current++,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};

for (let item of myIterible) {
  console.log(item);
}
