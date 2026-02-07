// Singleton Object
// const tinderUser = new Object()

//non singleton object
const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "Nadir";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);


const regularUser = {
    email : "nadirshabbir@gmail.com",
    fullname : {
        uderfullname: {
           firstName: "Nadir", lastName: "Shabbir" 
        }
    }
}
// console.log(regularUser.fullname.uderfullname.firstName);


const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}
const obj4 = { 5: "e", 6: "f"}
// const obj3 = { obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = { ...obj1, ...obj2, ...obj4}
// console.log(obj3);

// const user = [
//     {
//     id: 1,
//     email: "n@gmail.com"
// }
// ]
// user[0].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty("names"));





const course = {
    coursename : "JavaScript",
    price : 999,
    courseInstructor : "Nadir Shabbir"
}
// course.coursename

const {courseInstructor: instructor} =  course;
console.log(instructor)
