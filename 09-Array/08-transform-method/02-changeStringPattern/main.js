function dashSeparated(str){
    let splitString = str.split('-')
    console.log(splitString)
    let camelCase = splitString.map((item,index)=>{
        if(index>0){
            console.log(item[0].toUpperCase()+item.slice(1))
           return item[0].toUpperCase()+item.slice(1)
        } else {
            console.log(item)
            return item
        }
    }).join('')
    return camelCase

}
console.log(dashSeparated('background-color-style'))