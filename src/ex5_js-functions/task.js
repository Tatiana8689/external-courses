function Сalculator(value) {
  this.currentValue = value; 
  
  this.add = (a = 0) => {
    this.currentValue = this.currentValue + a;
    return this.add;
  };

  this.subtract = (a = 0) => {
    this.currentValue = this.currentValue - a;
    return this.subtract; 
  };
    
  this.divide = (a = 1) => {
    this.currentValue = this.currentValue / a;
    return this.divide;
  };
    
  this.multiply = (a = 1) => {
    this.currentValue = this.currentValue * a;
    return this.multiply;
  };
    
  this.getResult = () => { 
    return this.currentValue;
  };
    
  this.reset = () => {
    this.currentValue = 0; 
  };
}

let calculator = new Сalculator(0);

module.exports = new Сalculator;
