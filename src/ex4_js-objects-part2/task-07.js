function trimString(string, num) {
  if (string.length > num) {
    return string.substring(0, num - 1) + '…';
  }

  return string;
}
  
module.exports = trimString;
