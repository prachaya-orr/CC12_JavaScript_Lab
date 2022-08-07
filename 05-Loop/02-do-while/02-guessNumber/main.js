let answer = prompt("Player1 : Enter Number")

if(+answer < 1 || +answer > 99){
    alert("Invalid Range")
}else{
    //For Player 2
    let guess;
    let count = 0;
    do{
        guess=prompt("Player 2 : Entere Number")
        count++
        if(guess==answer){
            alert("Correct")
            alert(count)
        }
        
    }while (guess!==answer)
}