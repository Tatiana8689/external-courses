function Сalculator(value) {
  this.currentValue = value; 
  
  this.add = (a) => {
    this.currentValue = this.currentValue + a;
    
    return this.add;
  };

  this.subtract = (a) => {
    this.currentValue = this.currentValue - a;
    
    return this.subtract; 
  };
    
  this.divide = (a) => {
    this.currentValue = this.currentValue / a;
    
    return this.divide;
  };
    
  this.multiply = (a) => {
    this.currentValue = this.currentValue * a;
    
    return this.multiply;
  };
    
  this.getResult = () => {
    if (isNaN(this.currentValue)) {
      this.currentValue = 0; 
    }
    
    return this.currentValue;
  };
    
  this.reset = () => {
    this.currentValue = 0; 
  };
}

let calculator = new Сalculator(0);

module.exports = new Сalculator;
