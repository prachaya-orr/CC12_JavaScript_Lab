function cloneObj (...obj){
     return {obj}
    }

const testObj1 = 
    {fruitName: 'apple',
    price : 10,
    address :{
        district : "pathumwan",
        province : "bangkok",
    }
}
const testObj2 = 
    {fruitName: 'banana',
    price : 12,
    address :{
        district : "ladkrabang",
        province : "bangkok",
    }
}

let c = cloneObj(testObj1,testObj2)
console.log(c)