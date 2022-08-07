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




let calDayFromBirthYear = (birthYear) => {
    let day = 0

    for (let i = birthYear; i<= 2020;i++){
        if(isLeapyear(i)){
            day+=366;
        }else{
            day += 365
        }
    }

    return day
}

console.log(calDayFromBirthYear(2000))