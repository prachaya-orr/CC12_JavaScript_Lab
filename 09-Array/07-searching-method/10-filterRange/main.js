function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b && item);
}


const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,20,25]
console.log(filterRange(arr,3,15))
console.log(filterRange(arr,2,5))