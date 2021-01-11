
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let result = 0;
  if (toN !== fromN) {
    result =  toN + sum(fromN, toN - 1);
    return result;
  } else {
    return toN;
  }
};

module.exports = sum;
