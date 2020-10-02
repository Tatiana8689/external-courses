function searchName(string, obj) {
  if (string in obj) {
    return true;
  }
  
  return false;
}

module.exports = searchName;
