function copyObject(obj) {
  let clone = {};
    
  for (let key in obj) {
    clone[key] = obj[key];
  }

  return clone;
}
  
module.exports = copyObject;
  