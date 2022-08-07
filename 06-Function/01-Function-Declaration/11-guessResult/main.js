function sayHi(age) {
  if (age < 12) alert("Hi kid");
}
console.log(sayHi); // * fn SayHi()
console.log(sayHi(10)); // ** alert("Hi kid")

function sayHi(name) {
  if (name) {
    alert("Hi " + name);
    return;
  } else {
    return "Who are you";
  }
}
console.log(sayHi("John")); // *** alert( "Hi John")
console.log(sayHi()); // **** Who are you
