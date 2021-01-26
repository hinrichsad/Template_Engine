const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, GitHub){
        //no need to redefine because these are defined in the employee.js parent constructor thus we can super them in
        super(name, id, email);
        //github is a new property and must be defined
        this.GitHub = GitHub;
    }

    getGitHub(){
        return this.GitHub;
    }

    //overwrites the "Employee" role in the parent function
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;