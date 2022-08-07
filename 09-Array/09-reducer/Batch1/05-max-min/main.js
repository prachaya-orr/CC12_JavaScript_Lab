// จงหาค่ามากสุดและน้อยสุดใน arr
let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

// let max = arr.reduce((acc, item) => (acc - item > 0 ? acc : item), -Infinity);
// max;

// let min = arr.reduce((acc, item) => (acc - item > 0 ? item : acc), Infinity);
// min;

// const initialValue = {
//     max: arr[0],
//     min: arr[0],
// };

// let summary = arr.reduce((acc, item) => {
//   //Check MAX

//   if (acc.max < item) {
//     acc.max = item;
//   }

//   //Check Min
//   if(acc.min > item){

//     acc.min = item
//   }
//   return acc
// },initialValue);


function findMaxMin(arr){
    const initialValue = {
        max: arr[0],
        min: arr[0],
      };
      
      let summary = arr.reduce((acc, item) => {
        //Check MAX
      
        if (acc.max < item) {
          acc.max = item;
        }
      
        //Check Min
        if(acc.min > item){
      
          acc.min = item
        }
        return acc

      },initialValue);
    
      return summary
}

console.log(findMaxMin(arr))