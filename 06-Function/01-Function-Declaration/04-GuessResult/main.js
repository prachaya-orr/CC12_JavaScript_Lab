function sayHi(name) { // ใน sayHiมี parameter ที่ประกาศแล้วว่า name
    let name = "Guest";
    console.log(name); // * SyntaxError: Identifier 'name' has already been declared
  }
  
  sayHi("Jim");