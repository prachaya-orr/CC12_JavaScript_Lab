function newArray(array1){
    let arr = [...array1]
        arr[3] =arr[3]**2
    return arr
}
array1=[1,2,3,4]
console.log(newArray(array1)) // แต่ต้องใส่ if elseเช็คว่ามี ตัว index ที่ 3 ไหม

function indexThreeSquare(arr){
    return arr.map((item,index) => (index===3)? item ** 2 : item);
}
console.log(indexThreeSquare([1,2,3,4]))

const result = [1,3,5].map(cb)


function cb(item,index){
    return item *3
}