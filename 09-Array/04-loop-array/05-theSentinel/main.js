/* - ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
- รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
- ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array
 */



const THE_SENTINEL = 'stop'
function sumNumArr () {

    const Arr = []
    
    //  modified Object
    let num;
    do {
    
    num = prompt("Enter num")
    if(num !== null && num.trim !== '' && num !== THE_SENTINEL ){
        // Update ได้
        Arr.push(+num)
    }

    } while (num !== THE_SENTINEL )

    let sum = 0
    Arr.forEach((item) => sum+=item)

    return sum
}

