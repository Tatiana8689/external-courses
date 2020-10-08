function reverseString(string) {
  const array = string.split('');
    
  return array.reverse().join('');  
}
  
module.exports = reverseString;
