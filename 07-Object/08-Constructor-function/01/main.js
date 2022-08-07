
function Calculator() {
    
        this.num1 = 0
        this.num2 = 0  
    

    this.read = function() {
      this.num1 = +prompt('Enter num1');
      this.num2 = +prompt('Enter num2');
    }

    this.sum = function() {
      return this.num1 + this.num2;
    }

    this.mul = function() {
  return this.num1 * this.num2;
    }
  };
  
  let cal1 = new Calculator()
  let cal2 = new Calculator()

  cal1.read()
  cal2.read()
  cal1.sum()
  cal1.mul()