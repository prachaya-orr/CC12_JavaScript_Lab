var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser(); // user = {name:John, ref:window}
console.log(user.ref.name); // * 'Joe' // window got name