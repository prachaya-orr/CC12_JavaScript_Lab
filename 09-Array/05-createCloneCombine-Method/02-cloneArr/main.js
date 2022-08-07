function clone(arr) {
    // return arr.slice()
    return [...arr]
}

arr1 = [1,2,3]
const newArray = clone(arr1)
console.log(newArray)