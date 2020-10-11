function searchKeyProt(key, obj) {
  const protObj = Object.getPrototypeOf(obj);
   
  if (protObj.hasOwnProperty([key])) {
    return protObj[key];
  }
    
  return; //eslint-disable-line
}
  
module.exports = searchKeyProt;
