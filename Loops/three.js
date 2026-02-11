// for of
// Array specific Loop
// ["", "", {}, {}]



// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);  
// }


// const greetings = "Hello Nadir"
// for (const greet of greetings) {
//     if(greet === " "){
//         break
//     }

//     console.log(greet)
// }



// Maps


const map = new Map()
map.set('PK', "Pakistan")
map.set('PK', "Pakistan")
map.set('IN', "India")
map.set('USA', "United States of America")  

// console.log(map)


// for (const [key, value] of map) {
//     console.log(key, " :- ", value )
// }




// for in Loop

const myObj = {
    js : "Java Script",
    cpp: "C++",
    rb: "Ruby"
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}




const programming = ["js", "rb", "py", "java", "cpp"] 

for (const key in programming) {
    console.log(programming[key])
}