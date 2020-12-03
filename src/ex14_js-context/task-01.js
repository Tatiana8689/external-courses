class Сalculator {
  static initialValue = 0;

  static add(a = 0) {
    this.initialValue = this.initialValue + a;

    return this;
  }

  static subtract(a = 0) {
    this.initialValue = this.initialValue - a;

    return this;
  }

  static divide(a = 1) {
    this.initialValue = this.initialValue / a;

    return this;
  }

  static multiply(a = 1) {
    this.initialValue = this.initialValue * a;

    return this;
  }

  static getResult() {
    return this.initialValue;
  }

  static setState(a) {
    this.initialValue = a;

    return this;
  }

  static reset() {
    this.initialValue = 0;

    return this;
  }

  static fetchData(cb) {
    setTimeout(cb.bind(Сalculator), 2000, 500);
  }
}

module.exports = Сalculator;
