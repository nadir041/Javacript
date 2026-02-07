const student = {
    name: "Nadir Khan",
    totalMarks: 300,

    marks:{
        math: 80,
        eng: 33,
        urdu: 20
    },
    calculatetotal(){
       return(this.marks.math + this.marks.eng + this.marks.urdu);
    },


    calculatePercentage(){
        const obtained = this.calculatetotal();
        return (obtained / this.totalMarks) * 100;
    },


    calculateGrade(){

        const percentage = this.calculatePercentage();

        if(percentage >= 80) return "A";
        else if(percentage >= 60) return "B";
        else if(percentage >= 50) return "C";
        else return "F";
    },


    hasFailed(){
        if(this.math < 50 || this.eng < 50 || this.urdu < 50) { return "True";}
        else return "False";
    }
};

console.log("Student Name: ", student.name );

const totalMarks = student.calculatetotal();
console.log("Total Marks: ", totalMarks + "/" + student.totalMarks );


const percentage = student.calculatePercentage();
console.log("Percentage: ", percentage.toFixed(2)  + "%");

const grade = student.calculateGrade();
console.log("Grade: ", grade)

const failed = student.hasFailed();
console.log("Failed any Subject: ", failed ? "Yes": "No");