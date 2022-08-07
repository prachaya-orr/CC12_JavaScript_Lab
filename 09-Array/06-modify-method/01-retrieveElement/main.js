const sports = ['football', 'volleyball', 'tennis', 'basketball', 'judo'];

let clonesports = sports.slice()

let res = clonesports.splice(1,3)

console.log(res)
console.log(sports)