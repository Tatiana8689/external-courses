function searchString(string, str) {
  if (string.includes(str)) {
    return true;
  }
    
  return false;
}
  
module.exports = searchString;
