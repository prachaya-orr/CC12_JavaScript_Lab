function mulpy(...num){
    let result = num.reduce((acc,item)=> acc*item ,1)
    return result
}

console.log(mulpy(1,2,3,4,5,6,7,8,9,10)) //3628800