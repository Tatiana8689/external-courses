function allEqual(array) {
  let firstElement = array[0];
  
  for (let i = 1; i < array.length; i++) {
    if (firstElement !== array[i]) {
      return false;
    } 
  }
    
  return true;   
}

module.exports = allEqual;
