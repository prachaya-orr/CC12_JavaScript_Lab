let checkDivideBySeven = num => {
    if(num%7===0) {
        console.log("Can divide by 7")
    }else{
        console.log("Not can divide by 7")
    }
}


const divideSeven = num =>{
    return num%7 === 0
}

const divideSeven1 = num => num%7 === 0

const divideSeven2 = num => num%7 == 0 ? true:false

checkDivideBySeven(41)
checkDivideBySeven(49)