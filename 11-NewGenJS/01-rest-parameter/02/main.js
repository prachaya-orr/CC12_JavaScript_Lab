// function filterOutOdds(...num){
//     let result = num.filter((value,index,array)=> value%2==0? true:false)
//     return result
// }
// console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 11, 22, 33, 22, 1213, 4, 5))

const filterOutOdds2 = (...nums) => nums.filter((cur) => cur % 2 == 0);
console.log(filterOutOdds2(1, 2, 3, 4, 5, 6, 11, 22, 33, 22, 1213, 4, 5));



console.log(filterOutOdds2(1,2,3,4,5,6,7,8,9,10))


const filterOutOdds3 = (...numbers) => {
    return numbers.reduce(function(acc,item){
        if(item%2==0){
            acc.push(item);
        }
        return acc;
    },[])
}

console.log(filterOutOdds3(1,2,3,4,5,6,7,8,9,22))