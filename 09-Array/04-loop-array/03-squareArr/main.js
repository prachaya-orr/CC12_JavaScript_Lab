function squareArr(arr){
    let resultArr = [];

    arr.forEach((number,i)=>resultArr[i]=number**2)

  	return resultArr
}

const arr = [2, 3, 5, 7, 11];
console.log(squareArr(arr))

