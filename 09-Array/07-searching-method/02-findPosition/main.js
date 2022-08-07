const alphabets = ["a", "b", "a", "c", "a", "d"];
// let result = []

// // for (let i in alphabets){
// //     if(alphabets[i]=='a')  result.push(i)
// // }

// console.log(result)

let result = [];
let foundIndex = alphabets.indexOf("a");

do {
    
  if (foundIndex !== -1) {
      result.push(foundIndex);
        foundIndex = alphabets.indexOf('a',foundIndex+1)
  }
} while (foundIndex !== -1);

console.log(result)