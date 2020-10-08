function addString(string, str, num) {
  const array = string.split(' ');
    
  const begin = array.slice(0, num + 1).join(' ');
  const end = array.slice(num + 1);
    
  const newPhrase = [begin, str, end];
    
  return newPhrase.join(' ');
}
  
module.exports = addString;
