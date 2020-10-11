function camelCase(string) {
  const array = string.split(' ');

  array[0] = array[0].toLowerCase();
    
  for (let i = 1; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1).toLowerCase(); 
  }
    
  return array.join('');
}
  
module.exports = camelCase;
