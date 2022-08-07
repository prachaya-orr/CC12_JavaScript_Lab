let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33


function getAverageAge(arr){

    let avgAge = arr.reduce((acc,current)=>acc+current.age,0)/arr.length
    return avgAge.toFixed(2)
}