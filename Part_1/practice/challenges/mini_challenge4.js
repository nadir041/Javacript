// Challenge 4: Create a namespace for a user by taking their full name, converting it to lowercase, removing spaces, and appending a random number between 1 and 100.

let name = "Nadir Shabbir";
const fullName = name.toLowerCase();
const namespace = fullName.replaceAll(" ", "");
const randomNumber = Math.round(Math.random() * 100) + 1;
console.log(namespace + randomNumber);
