// จงเขียนคำสั่งเพื่อ Alert ค่าที่อยู่ใน \<li> ทุกตัว

const ul = document.getElementsByTagName('ul')
// const li = document.getElementsByTagName('li')
const li = document.querySelectorAll('li')
for(let item of li){
    alert(item.innerText)
}
