/* จงเขียนฟังก์ชัน ucFirst(str) เพื่อแปลงตัวอักษรตัวแรกของ str ให้เป็นตัวพิมพ์ใหญ่ ส่วนตัวอักษรที่เหลือให้มีขนาดเหมือนเดิม */

function ucFirst(str){
    // let firstChar = str[0]

    if(!str){
        return "This funxtion not alow for empty string"
    }
    
    let newString = str.trim()
    let firstChar = newString.slice(0,1)
    let leftString = newString.slice(1)

    return firstChar.toUpperCase() + leftString
}

console.log(ucFirst("hello it\'s me"))
console.log(ucFirst(""))
console.log(ucFirst("    hello it's me   "))