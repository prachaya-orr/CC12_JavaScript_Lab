/* เปลี่ยน if-else ข้างล่างให้อยู่ในรูปของ Ternary Operators

```js
let age = prompt("How old are you");
let message;
if (age >= 18) {
  message = "Allowed";
} else {
  message = "Not allowed";
}
```
 */
function checkNumber(age){
    return !( age == null || age == "" || age.trim() == "" || isNaN(age))
}
 let age = prompt("How old are you");
if(checkNumber(age)){
       let message;
    // if (age >= 18) {
    //   message = "Allowed";
    // } else {
    //   message = "Not allowed";
    // }

    message = (age >= 18)? "Allowed": "Not allowed"
    alert(message)
} else {
    alert("age is Invalid Number")
}