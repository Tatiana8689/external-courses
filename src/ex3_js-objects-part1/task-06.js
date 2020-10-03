function deepCopyObj(obj) {
  let clone;

  if (Array.isArray(obj)) {
    clone = [];
  } else {
    clone = {};
  } 
  
  for (let key in obj) {
    let prop = obj[key];
    
    if (typeof prop === 'object') {
      clone[key] = deepCopyObj(prop);    
    } else {
      clone[key] = prop;
    }
  }
  
  return clone;
}

module.exports = deepCopyObj;
