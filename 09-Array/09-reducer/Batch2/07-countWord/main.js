/* 
    INPUT : Array
    OUTPUT : Object
 */
/* 
    IF current name already exist
        ADD value + 1
    ELSE 
        ADD new Property and SET value  = 1
*/

let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];

let result = names.reduce(function (acc, item, index, array) {
  // ############ DO logic

  //ADD Property to Oject
  //   let currentKey = acc[item];
  //   if (!currentKey) {
  //   ไม่เคยมี key มาก่อน
  //     acc[item] = 1;
  //   } else {
  //     acc[item] = acc[item] + 1;
  //   }

  acc[item] = acc[item] ? acc[item] + 1 : 1;

  //#################

  //return accumulator for Next Loop
  return acc;
}, {});

result;
