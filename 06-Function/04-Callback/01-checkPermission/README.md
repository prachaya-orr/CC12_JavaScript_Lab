ให้สร้างฟังก์ชัน checkPermission โดยมีพารามิเตอร์ 3 ตัว

- ตัวแรกเป็น role
- ตัวที่สองเป็นฟังก์ชันและทำงานเมื่อ role มีค่าเท่ากับ “ADMIN”
- ตัวที่สามเป็นฟังก์ชันและทำงานเมื่อ role ไม่ใช่ “ADMIN”
- ให้ลองเรียกใช้ฟังก์ชันโดย
- ถ้า role เป็น “ADMIN” ให้ alert “ACCESS GRANTED”
- ถ้า role ไม่ใช่ “ADMIN” ให้ alert “ACCESS DENIED”


function checkPermission (role.cb1,cb2){
    if(role === 'ADMIN'){
        cb1();
    }else{
        cb2()
}

//CallBack when Admin

let adMinExecute = function (){
    alert("ACCESS GRANT")

//CallBack when Guest
let guestExecute = () => alert("ACCESS GRANT")


checkPermission ("ADMIN",adMinExecute,guestExecute)