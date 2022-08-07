function max(a, b, c, d) {
  if (a === undefined) {
    return undefined;
  }

  // ใส่แค่ a
  if (b === undefined) {
    return a;
  }

// ใส่แค่ a,b
    if (c === undefined) {
        return a > b ? a : b;
    }

// ใส่ a,b,c
    if (d === undefined){
        // let max = Math.max(a,b,c)// return Maximum Value
        // return Max
        return Math.max(a,b,c)
    }
    return Math.max(a,b,c,d)
}

console.log(max())
console.log(max(3,5,6))
console.log(max(53,6346,234))
console.log(max(5234, undefined,324))
