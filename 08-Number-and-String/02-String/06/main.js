function extractCurrencyValue(string, rate){
    let converted = +string.slice(1) * rate //slice start at Index 1
    return 'THB' + converted
}

console.log(extractCurrencyValue('$120', 37))