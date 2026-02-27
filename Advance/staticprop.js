class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }

    static createId(){
        return Math.floor(Math.random() * 1000 + 1)
    }
}

const nadir = new User("nadir")
// console.log(nadir.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const oppo = new Teacher("F21pro", "oppo@gmail.com")
oppo.logMe()

console.log(oppo.createId())


