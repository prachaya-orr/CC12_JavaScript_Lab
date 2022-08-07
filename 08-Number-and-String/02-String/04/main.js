/* - จงเขียนฟังก์ชันเพื่อตรวจสอบข้อความ หากในข้อความนั้นมีคำว่า xxx, sex, porn ให้ return ค่าเป็น true แต่ถ้าไม่มีให้ return ค่าเป็น false
- ให้ตรวจสอบแบบ case-insensitive เช่น XXX, pOrn, sEX ให้ถือว่าเป็นคำเดียวกับ  
		xxx, porn, sex ตามลำดับ */


function wordDetection(str){
    // Nornalize 
    let lowerStr = str.toLowerCase()

    // #2 Check
    let isMatch = lowerStr.includes('xxx')||lowerStr.includes('porn')|| lowerStr.includes('sex')

    return isMatch
}

console.log(wordDetection("sex"))
console.log(wordDetection("porn"))
console.log(wordDetection("xxx"))

console.log(wordDetection("s@x"))
console.log(wordDetection("poRn"))
console.log(wordDetection("xxx"))
