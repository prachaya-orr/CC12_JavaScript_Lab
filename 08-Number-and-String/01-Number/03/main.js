
/* 
INPUT : sell 
OUTPUT : Point
*/

function calcPoint(sell){

    let point = Math.floor(sell/100)
    return point
}

console.log(calcPoint(159))
console.log(calcPoint(6900))
console.log(calcPoint(25007))