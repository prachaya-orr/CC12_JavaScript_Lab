/* - จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรดในรูปแบบ Ternary Operator
- ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
- ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
- ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
- ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
- ถ้าคะแนน น้อยกว่า 50 ได้ F
 */

function checkNumber(score){
    return !( score == null || score == "" || score.trim() == "" || isNaN(score))
}

let score = prompt("Enter Score: ")
let grade;
if(checkNumber(score)){
    grade = score >= 80 ? alert("A"): score >= 70 ? alert("B"): score >= 60 ? alert("C"): score >= 50 ? alert("D"):alert("F")
} else {
    alert("score is Invalid Number")
}