// จงเขียนฟังก์ชันในการสุ่มตัวเลข random(min, max) โดยให้ผลลัพธ์มีค่าเป็นจำนวนจริงตั้งแต่ min ถึง max (ไม่รวม max)


function numberRandom(min,max){
    
    return +(Math.random()*(max-min)).toFixed(2) + min
}

console.log(numberRandom(2,9))