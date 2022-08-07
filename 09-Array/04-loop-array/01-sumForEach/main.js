const array = [29, 17, 13, 47, 23, 31];

let sum = 0;
array.forEach((number,index,array) => sum += number )
// array.forEach(function(number,index,array) { sum += number
// console.log(`Round ${index+1}, Value in Array[${index}] is ${number}, Current sum value is ${sum}`)} )
console.log(sum)
