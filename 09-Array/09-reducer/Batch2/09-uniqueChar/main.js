let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

/* 
IF found character in arr first time
    PUSH
ELSE
    Dont PUSH



*/

const result = alphabets.reduce((acc,char)=>{

    if(!acc.includes(char)){ // false : ไม่เคยมี 
        acc.push(char)

    }

    return acc 


},[])

// result

const mySet = new Set(alphabets)
mySet
const uniqueChar = Array.from(mySet) // Array.from(### Object ####)
uniqueChar