function countFunction(array) {
  let even = 0;
  let odd = 0;
  let zero = 0;
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number' && !isNaN(array[i])) {
      if (array[i] === 0) {
        zero++;
      } else if (array[i] % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
  }
  return [even, odd, zero];
}
module.exports = countFunction;
