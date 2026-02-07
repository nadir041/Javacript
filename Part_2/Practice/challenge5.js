const student = {
     name: "Nadir",
     total: 300,
     marks: {
        math: 56,
        english: 80,
        science: 65
    },

    // method to calculate Percentage
    calculatePercentage(){
        const obtained = this.marks.math + this.marks.english + this.marks.science;
        return (obtained / this.total) * 100;
    },


    // method to calculate grade
    calculateGrade(){

        const percentage  = this.calculatePercentage();
        if (percentage  >= 80) return "A";
        else if( percentage  >= 60) return "B";
        else if(percentage  >=50) return "C";
        else return "F";
    }
};

console.log("Student Name: ", student.name);
const percentage = student.calculatePercentage();
console.log("Percentage: ", percentage .toFixed(2) + "%");
const grade = student.calculateGrade();
console.log("Grade: ", grade);
