// 

function calculateGrade(percentage){
    if(percentage >= 80){
        return "A";
    }
    else if(percentage >= 60){
    return "B";
    }
    else if (percentage >= 50) {
        return "C";
        } 
    else {
        return "F";
    }
}

const grade = calculateGrade(68);
console.log(grade);