function firstLetterCaps(string) {
  const array = string.split(' ');
    
  function upperCase(el) {
    return el[0].slice(0, 1).toUpperCase() + el.slice(1);
  }
  
  return array.map(upperCase).join(' ');
}
  
module.exports = firstLetterCaps;
