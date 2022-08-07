// - ให้สร้างฟังก์ชันที่ทำงานได้เหมือนฟังก์ชันด้านล่าง โดยให้เขียน 3 แบบ
// - ใช้ if แต่ห้ามใช้ else
// - ใช้ ? แทน if
// - ใช้ || แทน if

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}

// # 1
function checkAge1(age){
    if(age>18){
        return true
    }

    return confirm("Did parents allow you?");
}


// # 2
function checkAge2(age){
    return age > 18 ? true: confirm("Did parents allow you?")
}

// # 3
function checkAge3(age){
    return age > 18 || confirm("Did parents allow you?")
}