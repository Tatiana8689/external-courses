function arrFilter(array, callback) {
  let newArray = [];
    
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    } else {
      continue;
    }
  }
    
  return newArray;
}
  
module.exports = arrFilter;
