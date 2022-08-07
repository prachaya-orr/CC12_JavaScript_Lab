/* ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี้

- หาผลรวมตัวเลขทุกตัว
- หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
- หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)
 */

let sumTotal = 0;
let sumOnlyEven = 0;
let sumOnlyOdd = 0;

for (let i = 1; i <= 100 ;i++){
    
    sumTotal+=i;
    if (i%2==0){
        sumOnlyEven +=i;
    }else{
        sumOnlyOdd +=i;
    }

    if(i%2 ==0){
        SumsquareEven += i**2;
    }

    if(i%3 ==0){
        SumP3 += i**2
    }
}
    
    

console.log("sumTotal : ",sumTotal)
console.log("sumOnlyEven : ",sumOnlyEven)
console.log("sumOnlyOdd : ",sumOnlyOdd)
console.log("SumsquareEven-SumP3 : ",SumsquareEven-SumP3)

