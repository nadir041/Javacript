// Challenge: Create a program that calculates the percentage and grade of a student based on their marks in three subjects: Math, Physics, and English. The total marks for each subject is 100. The grading system is as follows:
// - 80% and above: Grade A
// - 60% to 79%: Grade B
// - 40% to 59%: Grade C
// - Below 40%: Fail

const total = 100;
const math = 70;
const physics = 80;
const english = 39;

console.log( "Total: " + (math + physics + english));


const percentage = ((math/total) * 100);
console.log("Math Percentage: " + percentage + "%");

if (percentage >= 80){
    console.log("Grade: A");
    
}
else if(percentage >= 60){
    console.log("Grade: B");
}
else if(percentage >= 40){
    console.log("Grade: C");
}
else{
    console.log("Fail")
}

const percentage2  =( (physics/ total) * 100);
console.log("Physics Percentage: " + percentage2 + "%");

if (percentage2 >= 80){
    console.log("Grade: A");
    
}
else if(percentage2 >= 60){
    console.log("Grade: B");
}
else if(percentage2 >= 40){
    console.log("Grade: C");
}
else{
    console.log("Fail")
}

const percentage3 = (english/total) * 100;
console.log("English Percentage: " + percentage3 + "%");

if (percentage3 >= 80){
    console.log("Grade: A");
    
}
else if(percentage3 >= 60){
    console.log("Grade: B");
}
else if(percentage3 >= 40){
    console.log("Grade: C");
}
else{
    console.log("Fail")
}