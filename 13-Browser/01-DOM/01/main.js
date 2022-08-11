// จงเขียนคำสั่งเพื่อ access \<div>, \<ul>, \<li> ตัวแรก และ \<li> ตัวที่สอง


const div =document.querySelector('div')
const ul = document.querySelector('ul')
const li = ul.firstElementChild
const li2 = ul.lastElementChild
console.log(div)
console.log(ul)
console.log(li)
console.log(li2)
