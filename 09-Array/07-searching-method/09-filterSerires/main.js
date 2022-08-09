const arrayInt = [1, 2, 3, 4];

// ค่าที่เป็นเลขคี่
const resultOdd = arrayInt.filter(function (item, index, arr) {
  return item % 2 !== 0;
});
resultOdd;

const array01 = [9, 17, 23, 5];
// ค่าที่มากกว่า 10
const result01 = array01.filter((item) => {
  return item > 10;
});
result01;

const array02 = [1, "1", 2, {}];
// ค่าที่ประเภทข้อมูลเป็น Number
const result02 = array02.filter((item) => {
  return typeof item == "string";
});
result02;

const array03 = ["apple", "banana", "orange", "pineapple", "watermeon"];
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว
const result03 = array03.filter((item) => {
  return item.length > 6;
});
result03;

const array04 = [1, -3, 2, 8, -4, 5];
// ค่าที่เป็นเลขบวก
const result04 = array04.filter((item) => {
  return item > 0;
});
result04;

const array05 = [1, 3, 4, 5, 6, 7, 8];
// ค่าที่หาร 3 ลงตัว
const result05 = array05.filter((item) => {
  return item % 3 == 0;
});
result05;

const arr6 = ["Elephant", "Ant", "Cat", "Eagle", "Zebra"];
// ค่าที่ขึ้นต้นด้วยตัว E
const res06 = arr6.filter((item) => {
  return item[0] === "E";
});
res06;

const arr07 = ["APPLE", "oRanGE", "PEACH", "PaPAYA"];
// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
const res07 = arr07.filter((item) => {
  return item.toUpperCase() == item && item;
});
res07;

const arr08 = ["Krabi", "Chonburi", "Buriram", "Saraburi", "Phrae"];
// ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
const res08 = arr08.filter(
  (item) => item.toLowerCase().includes("buri") && item
);
res08;

const arr09 = [
  { name: "Ben", age: 14 },
  { name: "Phil", age: 18 },
  { name: "John", age: 32 },
  { name: "Ann", age: 16 },
  { name: "Paul", age: 24 },
];
// อายุไม่น้อยกว่า 18
let res09 = arr09.filter(item => item.age >= 18 && item);
res09;

const arr10 = [
  { id: 1, name: "Pepsi" },
  { id: 2, name: "Mirinda" },
  { id: 3, name: "Coke" },
  { id: 4, name: "Fanta" },
  { id: 5, name: "Sprite" },
];
// id ไม่เท่ากับ 4
const res10 = arr10.filter(item=> item.id !==4 && item)
res10

const arr11 = [
    { name: 'John', birth: '2001-07-31' },
    { name: 'Jack', birth: '1990-06-24' },
    { name: 'Jim', birth: '1984-12-13' },
    { name: 'Jeff', birth: '1996-02-05' },
    { name: 'Joe', birth: '2002-06-13' }
  ];
  // เกิดเดือน 6
  const res11 = arr11.filter(item => item.birth.slice(5,7)==='06' && item)
  res11