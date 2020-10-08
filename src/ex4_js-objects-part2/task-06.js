function firstLetterCaps(string) {
  let array = string.split(' ');
      
  let caps = (el) => el[0].slice(0, 1).toUpperCase() + el.slice(1);
  
  return array.map(caps).join(' ');
}
  
module.exports = firstLetterCaps;
