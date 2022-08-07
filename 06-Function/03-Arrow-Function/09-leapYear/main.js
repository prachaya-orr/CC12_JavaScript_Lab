let isLeapyear = year => {

    if (year%100 == 0){

        // if(year%400==0){
        //     return true;
        // }else{
        //     return false;
        // }
    
        // return year%400 === 0 ? true:false
        return year % 400 ===0

    }   
    // if (year % 4 == 0){
    //     return true;
    // }else {
    //     return false;
    // }
    return year%4 === 0
}
isLeapyear(1800)
isLeapyear(1900)
isLeapyear(2000)
isLeapyear(36)