const THE_SENTINEL = 'stop'

let product  = {}
    function shoppingCart(){
    let value;
    let defaultkey = ["name","sellVolume","price","discount"]
        for(let key of defaultkey ){
            value = prompt(`Enter product ${key} `)
            if(key !== null && key.trim !== '' && key !== THE_SENTINEL && value !== THE_SENTINEL){
                // Update ได้
                product[key] = value
            }
            if(+product["discount"]== 0 || product["discount"]==null){
                delete product["discount"]
            }
        }  
        return product
    }
    
    function realPrice(){
        product['sellVolume'] = +product['sellVolume']
        product['price'] = +product['price']
        product['discount'] = +product['discount']
        product['actualPrice'] = +product['price'] - +product['price'] * +product['discount']/100
    }


    // do{
    //  key = prompt("Enter key : ")
    //  value = prompt("Enter value: ")

    //   if(key !== null && key.trim !== '' && key !== THE_SENTINEL && value !== THE_SENTINEL){
    //       // Update ได้
    //       product[key] = value
    //   }
    // }while (key !== THE_SENTINEL && value !== THE_SENTINEL)

