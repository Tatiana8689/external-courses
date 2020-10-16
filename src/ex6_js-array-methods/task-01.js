function arrSlice(array, begin, end) {
  let newArray = [];
  let start = begin || 0;
  let finish = end;
      
  if (begin <= 0) {
    start = array.length + start;
  } else {
    start = start;
  }
  
  if (end) {
    finish = end;
  } else {
    finish = array.length;
  }
  
  if (end < 0) {
    finish = array.length + end;
  }
  
  for (let i = start; i < finish; i++) {
    newArray.push(array[i]);
  }
    
  return newArray;
}
  
module.exports = arrSlice;
