function typeFunction(a) {
  const result = typeof a;
  
  if (result === 'number') {
    if (isNaN(a)) {
      return undefined;
    }

    return result;
  }

  if (result === 'string') {
    return result;
  }

  return undefined;
}
module.exports = typeFunction;
