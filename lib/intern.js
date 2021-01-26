const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        //no need to redefine because these are defined in the employee.js parent constructor thus we can super them in
        super(name, id, email);
        //github is a new property and must be defined
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    //overwrites the "Employee" role in the parent function
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;