function searchKeyProt(key, obj) { 
  if (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      return obj[key];
    } 
  }
  
  return; //eslint-disable-line
}
  
module.exports = searchKeyProt;
