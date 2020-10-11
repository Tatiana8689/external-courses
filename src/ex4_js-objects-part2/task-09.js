function addString(string, str, num) {
  const array = string.split(' ');
    
  const begin = array.slice(0, num + 1).join(' ');
  const end = array.slice(num + 1);
    
  return [begin, str, end].join(' ');
}
  
module.exports = addString;
