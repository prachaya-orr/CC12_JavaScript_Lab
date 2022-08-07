// - จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด
// - ถ้า salaries เป็น empty object ให้ return null
// - ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

const { John, Pete , Mary} = salaries;
    
    
    let arrSalaries = [John, Pete, Mary];
    console.log(Math.max(...arrSalaries))

const topSalaries = salaries => {
    // console.log(`${user.firstName} ${user.lastName}`);
    const { John, Pete , Mary} = salaries;
    
    
    let arrSalaries = [John, Pete, Mary];
    console.log(arrSalaries)
    // arrSalaries.sort((a,b) => b-a)
    // arrSalaries
    Math.max(...arrSalaries)
  };
// function topSalaries(salaries){ v
    
//     const { John, Pete, Mary} = salaries
//     console.log(`${John}`)
// }