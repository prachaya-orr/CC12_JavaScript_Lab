function getPerson(firstName, lastName, ...hobbies){
    return {
        firstName, // เขียนแบบ shortHand
        lastName,
        hobbies,
        numHobbies: hobbies.length
    }
}

console.log(getPerson('Prachay','Orraeiam','Sport','Games'))

const getPerson1 = (firstName, lastName,...hobbies) => ({
    firstName,
    lastName,
    hobbies,
    numHobbies: hobbies.length
});