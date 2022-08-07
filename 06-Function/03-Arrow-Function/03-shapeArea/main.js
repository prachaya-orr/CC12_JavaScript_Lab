const square = (n) => {
    n ** 2;
  };
  
  console.log(square(7)); // * undefined เพราะ ใน bracket ไม่มี return ละได้ ต้องเป็น one-line


const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // ** return  28.274333882308138 ผลการคำนวณกลับมาได้ เพราะเป็น คำสั่้งเดียว