const user = {
    username: "Nadir Shabbir",
    loginCount: 5,
    signedIn: true,

    getuserDetails: function () {
        console.log(this.signedIn)
    }

}
// console.log(user.getuserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function (){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("Hamza", 11, false)
const userTwo = new User("Tariq", 101, true)
console.log(userOne.constructor);
// console.log(userTwo);


