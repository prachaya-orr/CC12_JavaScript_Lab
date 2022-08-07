บรรทัดที่มี \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function magic() {
  return function (x) {
    return x * 42;
  };
}
const answer = magic();
console.log(answer); // fn ()
console.log(answer(1337)); // 56,154**
console.log(magic(1337)(42)); // magic(1337) = magic() เพราะว่า magic()ไม่ได้รับ parameter** 1764 = 42 * 42
magic()(1337) maginc() function ที่ return function (x)