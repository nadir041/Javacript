// Dates


let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString())
let newDate = new Date(2004, 8, 24, 13, 3)
// console.log(newDate.toLocaleString());

let myTimestamp = Date.now()


// console.log(myTimestamp.toPrecision())
// console.log(myDate.getTime())


// mili second to second conversion
// console.log(Math.floor(Date.now()/100))

let ourDate = new Date()
console.log(ourDate)
// console.log(ourDate.getDay())
// console.log(ourDate.getFullYear())
// console.log(ourDate.getHours())
// console.log(ourDate.getMinutes() + " minutes")
// console.log(ourDate.getTimezoneOffset())

ourDate.toLocaleString('default',{
    weekday: "long"
})

