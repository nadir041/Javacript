const employee = {
    name: "Zubair",
    baseSalary: 75000,
    taxRate: 5,  // 5%
    bouns: 1000,

    calculateGrossSalary(){
        return this.baseSalary + this.bouns;
    },

    calculateTax(){
        const gross = this.calculateGrossSalary() / 100;
        return (gross * this.taxRate);
    },

    calculateNetSalary(){
        return (this.calculateGrossSalary() - this.calculateTax())
    },

    salaryLevel(){
        const net = this.calculateNetSalary();
        if (net >= 100000) return "High";
        else if (net >= 50000) return "Medium";
        else return "Low"
    }
};

console.log("Employee Name: ", employee.name);

console.log("Gross Salary: ", employee.calculateGrossSalary());

console.log("Tax: ", employee.calculateTax());


console.log("Net Salary: ", employee.calculateNetSalary());

console.log( "salaryLevel: ", employee.salaryLevel())
