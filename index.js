Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i));
  }
  return arr;
};
Array.prototype.myFilter = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      arr.push(this[i]);
    }
  }

  return arr;
};
Array.prototype.myReduce = function (cb, val) {
  let preVal = val;
  for (let index = 0; index < this.length; index++) {
    preVal = cb(preVal, this[i], i, this);
  }
  return preVal;
};
