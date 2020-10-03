function addProperty(string, obj) {
  if (string in obj === false) {
    obj[string] = 'new'; //eslint-disable-line
  }
    
  return obj;  
}
  
module.exports = addProperty;
