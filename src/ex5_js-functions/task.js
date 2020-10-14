function Сalculator(value) {
  this.currentValue = value; 
  
  this.add = (a) => {
    if (a) {
      this.currentValue = this.currentValue + a;
    } else {
      this.currentValue = this.currentValue + 0;
    }
    
    return this.add;
  };

  this.subtract = (a) => {
    if (a) {
      this.currentValue = this.currentValue - a;
    } else {
      this.currentValue = this.currentValue - 0;
    }
    
    return this.subtract; 
  };
    
  this.divide = (a) => {
    if (a) {
      this.currentValue = this.currentValue / a;
    } else {
      this.currentValue = this.currentValue / 1;
    }
    
    return this.divide;
  };
    
  this.multiply = (a) => {
    if (a) {
      this.currentValue = this.currentValue * a;
    } else {
      this.currentValue = this.currentValue * 1;
    }
    
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
