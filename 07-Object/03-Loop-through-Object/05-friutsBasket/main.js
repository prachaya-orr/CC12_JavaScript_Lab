const THE_SENTINEL = 'stop'
function fruitBasket () {
    let inBasket = {}
    
    //  modified Object
    let key;
    let value;
    do {
    
    key = prompt("Enter fruit")
    value = prompt("Enter quantity")
    if(key !== null && key.trim !== '' && key !== THE_SENTINEL && value !== THE_SENTINEL){
        // Update ได้
        inBasket[key] = value
    }

    } while (key !== THE_SENTINEL && value !== THE_SENTINEL)

    for (let key in inBasket ){
        if (inBasket[key] > 1 ){
            inBasket[`${key}s`] = inBasket[key]
            delete inBasket[key]
        }
    }

    return inBasket
}
