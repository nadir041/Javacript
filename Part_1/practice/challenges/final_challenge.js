let StudentName = "Nadir Shabbir";
const birthYear = 2004;
const totalMarks = 300;
const marks = [85, 51, 38];
const currentYear = new Date().getFullYear();

//Name
console.log("Student Name: " + StudentName);


//age calculation
const age = currentYear - birthYear;
if (age < 13){
    console.log( "Age: " + age + " (Child)");
}
else if (age >= 13 && age < 20){
    console.log( "Age: " + age + " (Teenager)");
}
else{
    console.log( "Age: " + age + " (Adult)");
}



// total marks calculation and percentage calculation

const Marks = marks.reduce((acc, mark) => acc + mark, 0);
console.log("Total Marks: " + Marks + "/" + totalMarks);
const percentage = (Marks / totalMarks) * 100;
console.log("Percentage: " + percentage.toFixed(2) + "%");
if (percentage >= 80){
    console.log("Grade: A");
}
else if (percentage >= 60){
    console.log("Grade: B");
    
}
else if(percentage >= 50){
    console.log("Grade: C");
}
else{
    console.log("Grade: F");
}

// pass/fail check
if( marks[0] < 50 || marks[1] < 50 || marks[2] < 50){
    console.log("Student has failed in one or more subjects.");
}
// random number generation for username
const randomNumber = Math.round(Math.random() * 100) + 1;
// username generation
const username = StudentName.toLowerCase().replaceAll(" ", "") + randomNumber;
console.log("Username: " + username);
