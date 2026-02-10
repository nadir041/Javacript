// (() => {
//     let count = 0;
//     console.log("Counter initialized")
// }
// )();




const myApp = (function(){

    const secret = "JS Rocket";
    return {
        reveal: function(){
            console.log(secret);
        }
    }
})();
myApp.reveal()
console.log(myApp.secret)