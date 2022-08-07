/* ให้เขียนโค้ดเพื่อหาผลรวมของเลขโดด  
    - รับค่าตัวเลขจากผู้ใช้งาน  
    - แสดงผลลัพธ์เป็นผลรวมของเลขแต่ละหลัก
 */

123
let number = +prompt("Enter Number")
let sumDigit = 0
//sumDigit = 0
//4596 ==> 4596%10 = 6
//459 ==> sumDigit = sumDigit + digit // (4596-6)/10 
// number = (number-digit)/10 //459

//45 ==> count =2
//4 ==> count =3
//0 ==> count =4

while(number){
    let digit = number % 10//6
    number = (number-digit)/10 //459
    sumDigit += digit
}
alert(sumDigit)

