// ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่ 

function checkEmptyObj(obj){

    for (let [key,values] of Object.entries(obj)) {
        if( key === undefined) {
            return "Empty"
        }
      }
    
}
checkEmptyObj({name:undefined});



//return key if It's not write [key,value]
// const [isEmpty,value] = Object.keys({name:undefined});
// console.log(isEmpty,value);


const isEmpty = Object.keys({}).length ===0 ;
console.log(isEmpty);