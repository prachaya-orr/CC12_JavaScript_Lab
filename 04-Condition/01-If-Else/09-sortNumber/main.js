/* - เขียนโปรแกรมสำหรับรับตัวเลขจากผู้ใช้งาน 3 ตัวเลข
- แสดงผลลัพธ์เป็นตัวเลขที่เรียงกันจากมากไปน้อย  
  เช่นรับค่าเป็น -1 ,4, 0 ให้แสดงผลเป็น 4, 0, -1 */

  let x = + prompt("Enter Number 1")
  let y = + prompt("Enter Number 2")
  let z = + prompt("Enter Number 3")


  // CASE 1: x Max
  // CASE 2: y Max
  // CASE 3: z Max

  if ( x > y && x > z){
    // alert("X maximum")
    if(y > z){
      alert(`${x}, ${y}, ${z}`)
    }else{
      alert(`${x}, ${z}, ${y}`)
    }
  } else if ( y > x && y >z) {
    // alert("Y maximum")
    if(x > z){
      alert(`${y}, ${x}, ${z}`)
    }else{
      alert(`${y}, ${z}, ${x}`)
    }
  } else {
    // alert("Z maximum")
    if(x > y){
      alert(`${z}, ${x}, ${y}`)
    }else{
      alert(`${z}, ${y}, ${x}`)
    }
  }