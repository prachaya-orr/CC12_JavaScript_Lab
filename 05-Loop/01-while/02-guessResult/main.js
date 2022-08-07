/* โค้ดทั้งสองให้ผลลัพธ์ออกมาเหมือนกันหรือไม่

```js
let i = 0;
while (++i < 5) alert(i);
```

```js
let i = 0;
while (i++ < 5) alert(i);
```
 */
{
let i = 0;
while (++i < 5) alert(i); // 1=>2=>3=>4
}

{
let i = 0;
while (i++ < 5) alert(i); //0=>1=>2=>3=>4=>5
}
