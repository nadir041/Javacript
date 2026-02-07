const user = {

    username : "ali",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website.`)
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Nadir"
// user.welcomeMessage()

// console.log(this)

// function one(){
//     let username = "khan"
//     console.log(this.username)
// }
// one()

// const one = function(){
//     let username = "NAdir Ali"
//     console.log(this.username)
// }

const one = () => {
    let username = "nadir"
    console.log(this);
}

// one()

// const addTwo = (num1, num2) => {

//     return num1 + num2
// }

// implecent return

//  const addTwo = (num1, num2) => num1 + num2



// const addTwo = (num1, num2) => (num1 + num2)



const addTwo = (num1, num2) => ({username : "Nadir"})
console.log(addTwo(1, 2))






