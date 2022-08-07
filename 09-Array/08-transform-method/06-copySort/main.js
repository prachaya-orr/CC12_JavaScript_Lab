let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

// console.log(sorted); // Angular, React, Vue
// console.log(arr); // React, Vue, Angular (no changes)

function copySorted(array){

    const clone = array.slice()
    return clone.sort()
}

let result =copySorted(arr) 
result



