function defineNumber(a) {
  if (a > 1000 || a === 1 || a <= 0) {
    return `Данные неверны`;
  }

  for ( let i = 2; i < a; i++) {
	  if (a % i === 0) {
	    return `Число ${a} - составное число`;
	  }
  }

  return `Число ${a} - простое число`;
}
module.exports = defineNumber;
