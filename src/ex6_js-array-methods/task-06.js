function arrReduce(array, callback, initialValue) {
  let previousValue = 0;
  
  if (initialValue) {
    previousValue = initialValue;
  } 
  
  for (let i = 0; i < array.length; i++ ) {
    let item = array[i];

    previousValue = callback(previousValue, item, i, array);  
  }

  return previousValue;
}

module.exports = arrReduce;
