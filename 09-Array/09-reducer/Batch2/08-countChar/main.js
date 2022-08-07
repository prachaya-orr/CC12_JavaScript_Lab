let str = 'I live in Thailand';
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
/* 
00 lowerCase
00 split by ""
FOR every item of arr

 */

 let lowercase = str.toLowerCase()
 lowercase
 console.log()
 const arrChar = lowercase.split('')
 arrChar



 const result = arrChar.reduce(function(acc,char){

    if(char.trim() !== ""){

    //     let foundValue = acc[char] // acc['i'], acc['l']
        
    //     if(foundValue){
    //         acc[char] +=1
    //     }else{
    //         acc[char] = 1
    //     }
    
    acc[char] = acc[char] ? acc[char] +1 : 1

    }



    return acc

 },{})
result
