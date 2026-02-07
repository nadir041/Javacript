let password = "myPassword123";
const passwordLength = password.length;
if ( passwordLength >= 10) {
    console.log("Password strength: Strong");
}
else if(passwordLength >= 6){
    console.log("Password strength: Medium");
}
else{
    console.log("Password strength: Weak");
}


