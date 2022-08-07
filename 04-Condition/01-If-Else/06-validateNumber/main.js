/* จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลขเข้ามา 2 ค่า
ให้โชว์ข้อความผลบวกของตัวเลขทั้ง 2
หากมี input อันนึงไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number” */
let  num1= prompt("Enter firstNumber:")
let  num2= prompt("Enter secondNumber:")
if (num1 == null || num1 == "" || num1.trim() == "" || isNaN(num1)) {
        alert("num1 is Invalid Number");
    } else if (num2 == null || num2 == "" || num2.trim() == "" || isNaN(num2)) {
        alert("num2 is Invalid Number");
    } else {
        let result = +num1 + +num2
        alert(result)
    }
