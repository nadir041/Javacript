// {} Scope
let a = 300

if(true){
    let a  = 10
    const b = 20
    // console.log("inner:", a)
}


// console.log(a);
// console.log(b);
// console.log(c);
function one(){
    const username = "Nadir Shabbir"
    function two(){
        const website = "www,nadirshabbir.com"
        // console.log("Username is ",username)
    }
    // console.log("website is ", website)
    two()

}
one()
 

if(true){
    const username = "ali"
    if(username === "ali"){
        const website = " www.ali.com"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)






// ************* Interesting  ****************
console.log(addone(5)) 
function addone(num){
    return num + 1
}


addTw0(5)
const addTw0 = function(num){
    return num + 2
}
