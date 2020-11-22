let Calculator = {
    initialValue: 0,
      
    add(a = 0) {
      this.initialValue = this.initialValue + a;
      
      return this;
    },
  
    subtract(a = 0) {
      this.initialValue = this.initialValue - a;
  
      return this; 
    },
      
    divide(a = 1) {
      this.initialValue = this.initialValue / a;
  
      return this;
    },
      
    multiply(a = 1) {
      this.initialValue = this.initialValue * a;
  
      return this;
    },
      
    getResult() { 
      return this.initialValue;
    },
    
    setState(a) {
     this.initialValue = a;
      
      return this;
    },
    
    reset() {
      this.initialValue = 0;
      
     return this; 
    },
  }
  

  
  