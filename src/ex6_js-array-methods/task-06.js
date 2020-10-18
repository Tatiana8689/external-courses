function arrReduce(array, callback, initialValue) { 
  if (arguments.length < 3) {
    previousValue = array[0];
    i = 1;
  } else {
    previousValue = initialValue;
    i = 0;
  }
  
  for (; i < array.length; i++ ) {
    previousValue = callback(previousValue, array[i], i, array);
  }
  
  return previousValue;
}

module.exports = arrReduce;
