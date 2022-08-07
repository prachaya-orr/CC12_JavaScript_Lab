// - ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข
// - โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
// - ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา

function isNum(input){
    return !(input === null || input.trim() === '' || input == 0 || isNaN(input))
}


let input;
let sum = 0;
let count = 0;

do {
    input = prompt("Enter Number")
    if(isNum(input)){
        sum += +input;
        count++;
    }

} while (isNum(input))

if(count> 0) {
    console.log(sum)
console.log(sum/count)
}

