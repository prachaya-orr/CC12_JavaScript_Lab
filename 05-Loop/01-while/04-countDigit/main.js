/* ให้เขียนโค้ดเพื่อนับจำนวนหลักเลขโดด  
    - รับค่าตัวเลขจากผู้ใช้งาน  
    - แสดงผลลัพธ์เป็นจำนวนหลักของตัวเลข
 */

let number = +prompt("EnterNumber")
let count = 0
//Couter = 0
//4596
//459 ==> count =1 // (4596-6)/10 
//45 ==> count =2
//4 ==> count =3
//0 ==> count =4

while(number){
    let remainder = number % 10//6
    number = (number-remainder)/10 //459
    count++;
}
alert(count)