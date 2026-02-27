class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`)
    }

}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email =  email
        this.password = password
    }

    addCourse(){
        console.log(`A new Course is added by ${this.username}`)
        console.log(`A new email of ${this.username} is ${this.email}`)
    }
}

const user = new Teacher("Nadir Shabbir", "nadir@gmail.com")
user.addCourse()
user.logMe()


const user2 = new User("khan")
user2.logMe()
