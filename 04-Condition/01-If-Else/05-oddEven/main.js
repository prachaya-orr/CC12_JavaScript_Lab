/* - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลข
- ถ้า input หารด้วย 2 ลงตัว ให้โชว์ข้อความ “Even number”
- ถ้า input หารด้วย 2 ไม่ลงตัว ให้โชว์ข้อความ “Odd number”
 */

let num = prompt("Enter Number:")

// while (num == null || num == "" || num.trim() == "" || isNaN(num)) {
//     alert("Please enter the number value!!");
//     num = prompt("Enter Number:")
//   } 
if(checkNumber(num)){
     if(+num%2===0){
        alert("Even number")
    }else{
        alert("Odd number")
    }
}


function checkNumber(num){
    return !( num == null || num == "" || num.trim() == "" || isNaN(num))
}
