function countLetter(string) {
  const array = string.split('');
  const obj = {};
    
  for (let i = 0; i < array.length; i++) {
    let key = array[i];
    
    if (obj[key]) {
      count = obj[key];
    } else {
      count = 0;
    }
    
    obj[key] = count + 1;
  }
  
  for (key in obj) {
    console.log(obj[key]);
  }
  
  return;   
}

module.exports = countLetter;
