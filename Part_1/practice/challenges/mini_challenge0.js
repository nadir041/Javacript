// Challenge: Create a program that takes a person's name and date of birth, calculates their age, and prints a message with their name and age.

let myName = "Nadir";
let my_DOB = "24-09-2004";

const currentYear = new Date()
const birthYear = Number(my_DOB.slice(-4));
let age = currentYear.getFullYear() - birthYear;

console.log("Hello " + myName + ", you are " + age + " years old.");
