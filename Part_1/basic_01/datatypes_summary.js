// Primitive

//7 Types:  String, Number, Boolean, null, undefined, Symbol, BigInt



// const score = 100
// const  scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;


// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);

// const bigNumber = 17382634868236843n


// Reference (Non Premitive)

// // Array, Objects, Functions


// const heros = ["Quaid", "Iqbal", "Muhammad"];
// console.log(heros)


// let OBJ = {
//     name : "Nadir",
//     age : 22,
//     gender : "male"
// }

// console.log(OBJ);



// const myFunction = function(){
//     console.log("Hello World");    
// }
// console.log(typeof myFunction);







// Memory Types

//Stack (primitive), Heap(Non-Primitive)



// let youtubeName = "Nadir's Thought"
// let anotherName =  youtubeName
// anotherName = "Hamza Thought"

// console.log(youtubeName);
// console.log(anotherName);

let userOne = {
    email : "admin@gmail.com",
    payment : "EasyPysa"
}
let userTwo = userOne
userTwo.email = "nadir62347a@gmail.com"

console.log(userOne);
console.log(userTwo);



