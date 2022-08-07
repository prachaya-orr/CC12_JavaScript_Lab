Math.random(); //[0,1)
[1,2,3,4,5,6] //Index: 0,1,2,3,4,5

const arr = [1,2,3,4,5,6]

// Math.random() * arr.length
// Math.floor(Math.random() * arr.length)

const removeRandom = arr => { 
    const randomIndex = Math.floor(Math.random() * arr.length)
        console.log('Random Index:'+randomIndex)
    let cloneArr = [...arr]
        cloneArr.splice(randomIndex,1)
    return cloneArr
}

console.log(removeRandom(arr))
console.log(removeRandom(arr))
console.log(removeRandom(arr))
console.log(removeRandom(arr))
console.log(removeRandom(arr))
console.log(removeRandom(arr))