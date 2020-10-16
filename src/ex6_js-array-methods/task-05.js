function arrMap(array, callback) {
  let newArray = [];
    
  for (let i = 0; i < array.length; i++) {
    let item = callback(array[i], i, array);
    newArray.push(item);
  }
    
  return newArray;
}
  
module.exports = arrMap;
