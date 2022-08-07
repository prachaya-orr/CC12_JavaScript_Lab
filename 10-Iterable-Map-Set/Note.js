let map = new Map()

console.log(map)
console.log(map.set('1', 'str1'))
console.log(map.set(1, 'num1'))
console.log(map.set(true,'coreect'))


console.log(map.get(1))
console.log(map.get('1'))
console.log(map.get(true))
console.log(map.get())


//Create Map
const obj= {
    name :"John",
    age: 27,
    isMarried:true,
}

const entries =Object.entries(obj)
console.log(entries)

const myMap = new Map(entries)
console.log(myMap)
console.log(myMap.get('name'))
console.log(myMap['name'])


const recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50]
]);
// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}
