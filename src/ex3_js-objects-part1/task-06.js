function deepCopyObj(obj) {
  let clone;

  if (Array.isArray(obj)) {
    clone = [];
  } else {
    clone = {};
  } 
  
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      clone[key] = deepCopyObj(obj[key]);    
    } else {
      clone[key] = obj[key];
    }
  }
  
  return clone;
}

module.exports = deepCopyObj;
