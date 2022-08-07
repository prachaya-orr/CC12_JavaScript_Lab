const THE_SENTINEL = 'stop'
let nameFriend = []

do {
    
    nameFriend = prompt("nameFriend")
    if(nameFriend !== null && nameFriend.trim !== '' && nameFriend !== THE_SENTINEL){
        // Update ได้
        nameFriend.push(nameFriend)
    }

    } while (nameFriend !== THE_SENTINEL && nameFriend.length < 5)
    
console.log(nameFriend)