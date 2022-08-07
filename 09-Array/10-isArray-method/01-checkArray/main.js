// จงเขียนฟังก์ชัน isArray(input) เพื่อตรวจสอบว่า input เป็น Array หรือไม่ 


function isArray(input){
    return Array.isArray(input)
}

//STATIC METHOD PROTOTYPE.method
//INSTANCE METHOD [1,2,34].method

console.log(isArray({}))
console.log(isArray(1))
console.log(isArray(""))
console.log(isArray([]))
console.log(isArray([1,2,3,4]))
