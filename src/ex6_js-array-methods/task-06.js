function arrReduce(array, callback, initialValue) {
  if (initialValue) {
    previousValue = initialValue;
      
    for (let i = 0; i < array.length; i++ ) {
      previousValue = callback(previousValue, array[i], i, array);
    }
  } else {
    previousValue = array[0];
      
    for (let i = 1; i < array.length; i++ ) {
      previousValue = callback(previousValue, array[i], i, array);
    }
  }
  
  return previousValue;
}

module.exports = arrReduce;
