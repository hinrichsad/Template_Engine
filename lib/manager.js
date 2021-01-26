const Employee = require("./employee");

class manager extends Employee {
    constructor(name, id, email, officeNum){
        //no need to redefine because these are defined in the employee.js parent constructor thus we can super them in
        super(name, id, email);
        //github is a new property and must be defined
        this.officeNum = officeNum;
    }

    getOfficeNum(){
        return this.officeNum;
    }

    //overwrites the "Employee" role in the parent function
    getRole(){
        return "Manager";
    }
}

module.exports = manager;