// for each Loop


const coding = ["js", "ruby", "python", "java", "cpp"]

// coding.forEach( function (item){
//     console.log(item);
// }
// )




// coding.forEach ((item) => {
//     console.log(item);
// })




const myCoding = [
    {
        language: "javascript",
        ext: "js"
    },
    {
        language: "python",
        ext: "py"
    },
    {
        language: "C++",
        ext: "Cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.language);
    
})