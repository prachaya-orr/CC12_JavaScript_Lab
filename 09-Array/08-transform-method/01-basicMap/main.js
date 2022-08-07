const array1 = [1, 2, 30, 400];
// result: [2, 4, 60, 800]

const resultInt = array1.map(function (item, index, arr) {
  return item * 2;
});

resultInt;

const array2 = [1, 2, 3, 4];
// // result: ["1", "2", "3", "4"]

const resultNum = array2.map((item) => String(item));
resultNum;

const array3 = [1, "1", 2, {}];
// // result: ["number", "string", "number", "object"]

const resultTypeof = array3.map((item) => typeof item);
resultTypeof;

const array4 = ["apple", "banana", "orange"];
// // result: ["APPLE", "BANANA", "ORANGE"]

const resultToUppercase = array4.map((item) => item.toUpperCase());
resultToUppercase;

const array5 = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

const resultEvenOdd = array5.map((item) => (item % 2 == 0 )? "even" : "odd");
resultEvenOdd;

const arrayAbsolute = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]

const resultAbs = arrayAbsolute.map((item) => Math.abs(item));
resultAbs

const arrayDecimal = [100, 200.25, 300.84, 400.3];
// // result: ["100.00", "200.25", "300.84", "400.30"]

const resultDecimal = arrayDecimal.map((item) => item.toFixed(2));
resultDecimal

const arrayMonth = [0, 5, 10, 7, 6, 5, 0];
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

const MONTH = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] 
const resultmonth = arrayMonth.map((item) => MONTH[item]);
resultmonth

const arrayPowerFour = [1, 16, 81, 256, 625, 1296];
// // result: [1, 2, 3, 4, 5, 6]
const resultPowerFour = arrayPowerFour.map((item) => Math.sqrt(Math.sqrt(item)));
resultPowerFour

const arrayObjectNameFruit = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// // result: ["apple", "banana", "watermelon"]

const resultObjectNameFruit = arrayObjectNameFruit.map((item,index) => item["name"]);
resultObjectNameFruit

const arrayObjectAgeFruit = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// // result: [14, 18, 32]

const resultObjectAgeFruit = arrayObjectAgeFruit.map(item=> item['age'])
resultObjectAgeFruit


const array10 = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]
const result10 = array10.map((item)=> item['name'] + ' ' + item['surname'])
result10


const array11 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
// // result: [
// //   { name: "apple", birth: "2000-01-01", age: 21 },
// //   { name: "banana", birth: "1990-10-01", age: 31 },
// //   { name: "watermelon", birth: "1985-12-01", age: 36 },
// // ]
const CURRENT_YEAR = "2021"
const result11 = array11.map(item =>{

    let age = CURRENT_YEAR - item.birth.slice(0,4) 
    
    return {...item, age:age}
})

result11

const arrayTable = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
// // result: [
// //     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
// //     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
// //     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// // ]

const display = arrayTable.map(function(item,index,array){
    //item = { name :'apple',birth:'2000-01-01'}
    let name =item.name
    let date =item.birth.slice(-2)
    let month = item.birth.slice(5,7)
    let monthName = MONTH[month-1].toLowerCase()
    let year = item.birth.slice(0,4)


    return `<tr><td>${name}</td><td>${date} ${monthName} ${year}</td></tr>`
})

display