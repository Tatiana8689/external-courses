function fixSpace(string) {
  return string.substring(string.indexOf(' ') + 1, string.lastIndexOf(' '));
}
  
module.exports = fixSpace;
