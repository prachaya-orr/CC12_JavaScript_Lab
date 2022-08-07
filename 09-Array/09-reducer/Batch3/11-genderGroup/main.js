
// จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน


const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' }
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }



let result = persons.reduce((acc,curr,array)=>{
    if(curr.sex === 'M'){
        acc['M'].push(curr.name)
    }else if(curr.sex === 'F'){
        acc['F'].push(curr.name) 
    }
    return acc
},{M:[],F:[]})

console.log(result)