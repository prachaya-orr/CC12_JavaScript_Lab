let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ];


  
let result = flattened.reduce((acc,item,index)=>acc.concat(item),[])
result 


function flatArray1(array){

    let flatArray = array.reduce((acc,item,index)=>{


        // acc.push(...item) // if return acc.push(...item) length of new array
        // return acc


        return acc.concat(item)
    },[])
    
    return flatArray


}
console.log(flatArray1(flattened))

