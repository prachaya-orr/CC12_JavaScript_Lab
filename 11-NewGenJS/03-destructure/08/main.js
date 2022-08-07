// จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age โดยถ้า user มีอายุมาก 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ-นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน (ใช้ destructuring)
const person = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['Sport', 'Shopping'],
    age: 19,
    address: {
      province: 'Bangkok',
      district: 'Pathumwan'
    },
    friends: [
      {
        firstName: 'Jim',
        lastName: 'Carry',
        phoneNumber: '0901999999'
      },
      {
        firstName: 'Jack',
        lastName: 'Ma',
        phoneNumber: '0901999998'
      }
    ]
  };

function checkAge(user){
    const {firstName, lastName, age} = user
    if(age>=18){
        alert(`Hi, ${firstName}  ${lastName}`)
    }else{
        alert(`ไม่มีสิทธิ์เข้าใช้งาน `)
    }
}

