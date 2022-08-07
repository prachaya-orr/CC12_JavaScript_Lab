let myFunc = function(a,b,c,d){
    return a+b+c+d
}

let x = myFunc(1,2,3,4)
console.log(`x: ${x}`)

// Arrow Function # 1
let myArrowFunc = (a,b,c,d) => a+b+c+d

let y = myArrowFunc(1,2,3,4)
console.log('y : ${y}')

// Arrow function # 2

// let inCreaseByFive = (num) => num + 5
let inCreaseByFive = num => num + 5
console.log(inCreaseByFive(3))

// Arrow Function #3 Multiline Function Body !!! ต้องมี return

let calcInterest = (balance, rate) =>{
    //do some task 
    let interest = balance * rate / 100
    
    return interest
}

console.log(calcInterest(100,28))

// Sol-1

let multiply = (num_1,num_2) => num_1 * num_2

console.log(multiply(23,29))