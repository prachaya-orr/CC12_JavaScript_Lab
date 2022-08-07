function Accumulator(startingValue){
    this.currentValue= startingValue

    this.read = function() {
        let input = +prompt('Enter additional number');
        this.currentValue += input
       return  this.currentValue
      }
  
      this.show = function() {
        return alert(this.currentValue)
      }
}

let acc1 = new Accumulator(1)

acc1.read()
acc1.show()