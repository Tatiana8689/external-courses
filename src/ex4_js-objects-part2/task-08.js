function camelCase(string) {
  const array = string.split(' ');
    
  for (let i = 1; i < array.length; i++) {
    array[0] = array[0].toLowerCase();
    array[i] = array[i].substring(0, 1).toUpperCase() + array[i].substring(1).toLowerCase(); 
  }
    
  return array.join('');
}
  
module.exports = camelCase;
