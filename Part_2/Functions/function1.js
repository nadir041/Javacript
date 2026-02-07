function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("R");
}
// sayMyName()
// (num1 , num2) are parameters


// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }


function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result;
    return num1 + num2;
   
    
}



// (1, "4") are arguments

const result =addTwoNumbers(1, "4")
// console.log("Result:", result)






function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`    
}

// console.log(loginUserMessage())


/// ... rest operator
/// converts data into arry.
function calculateCartPrice(...num1){
    return num1 
}
// console.log(calculateCartPrice(100, 200, 200))


const user = {
    name : "Nadir",
    prices : 100
}
function handleObject(anyobject){

    console.log(` username is ${anyobject.name} and ${anyobject.price} is price`)
}
// handleObject(user)
handleObject({
    name: "nadirkhan",
    price: 1309839399
})



const array = [1, 2, 3, 4, 5]

function returnSecondValue(getArray){

    return getArray[2]
}
// console.log(returnSecondValue(array))

console.log(returnSecondValue([100, 200, 300, 400, 500]))


 
