// Create a program that takes a person's date of birth, calculates their age, and categorizes them into Child (0-12), Teenager (13-19), Adult (20-59), or Senior (60+).

const birthYear = 2004
const currentYear = new Date().getFullYear()
const age = currentYear - birthYear
console.log("You are " + age + " years old.");
if (age < 13){
    console.log("Category: Child");
}
else if (age >= 13 && age < 20){
    console.log("Category: Teenager");
}
else if( age>= 20 && age < 60){
    console.log("Category: Adult");
}
else{
    console.log("Category: Senior");
}


