//Task 1

// let a = 10;
// function demo(){
//     let a = 20;
//     console.log(a);
// }
// demo();
// console.log(a);

//****************  Task 2   ************


// const obj = {
//     value : 10,
//     show: function(){
//         console.log(this.value)

//     }
// };
// obj.show()



//****************  Task 3   ************

const obj = {
    value: 10, 
    show: () =>{
        console.log(this.value);
    } 

};
obj.show();



// Task 3: Fix the Bug

const user = {
    name: "Zubair",
    greet: function () {
        setTimeout(() => {
            console.log("Hello " + this.name);
        }, 500);
    }
};
user.greet();