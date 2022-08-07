function checkPermission(response,yes,no){
    if(response()){
        yes();
    }else{
        no();
    }
}

function role(){
    confirm("Admin or not?")
}
function isADMIN(){
    alert("ACCESS GRANTED")
}

function notADMIN(){
    alert("ACCESS DENIED")
}

checkPermission(role,isADMIN,notADMIN)