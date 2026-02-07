// Sigleton

// object literals

const mySymbol = Symbol("Key1");

const JsUser = {
    name : "Nadir",
    age :  20,
    [mySymbol] : "This is a symbol key",
    location : "Islamabad",
    email :  "nadir@example.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"])

// console.log( typeof JsUser[mySymbol]);

// JsUser.email = "nadir@chatgpt.com";
// Object.freeze(JsUser);
// JsUser.email = "nadir@xyz.com";
// console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS USer");
}
JsUser.greeting2 = function(){
    console.log(`Hello User , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());