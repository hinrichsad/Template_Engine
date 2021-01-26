const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const renderer = require("./lib/htmlRenderer");


const team = [];

function addTeam(){
    console.log("-------------------------------------------------------------------------------")

    
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is your role on the team?   ",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Print Current Team"
            ]
        }
    ]).then(val => {
        console.log(`You are a(n) ${val.role}`);

        switch(val.role){
            //routes the user to different prompts based on answer
            case "Manager":
                createManager();
                break;
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            case "Print Current Team":
                console.log(team);
                addTeam();
        }
    })

    function createManager(){
        inquirer.prompt([
            {
                type: "input",
                name: "mName",
                message: "Your name:   "
            },
            {
                type: "number",
                name: "mId",
                message: "Employee ID:   "
            },
            {
                type: "input",
                name: "mEmail",
                message: "Your email:   "
            },
            {
                type: "input",
                name: "mOffice",
                message: "Your office number:   "
            }
        ]).then(val => {
            console.log(val);
            console.log("-------------------------------------------------------------------------------")

            const manager = new Manager(val.mName, val.mId, val.mEmail, val.mOffice)

            team.push(manager);

            addTeam();
        })
    }
    function createEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "eName",
                message: "Your name:   "
            },
            {
                type: "number",
                name: "eId",
                message: "Employee ID:   "
            },
            {
                type: "input",
                name: "eEmail",
                message: "Your email:   "
            },
            {
                type: "input",
                name: "eGitHub",
                message: "Your Github profile:   "
            }
        ]).then(val => {
            console.log(val);
            console.log("-------------------------------------------------------------------------------")

            const engineer = new Engineer(val.eName, val.eId, val.eEmail, val.eGitHub)

            team.push(engineer);

            addTeam();
        })
    }
    function createIntern(){
        inquirer.prompt([
            {
                type: "input",
                name: "iName",
                message: "Your name:   "
            },
            {
                type: "number",
                name: "iId",
                message: "Employee ID:   "
            },
            {
                type: "input",
                name: "iEmail",
                message: "Your email:   "
            },
            {
                type: "input",
                name: "iSchool",
                message: "Your school name:   "
            }
        ]).then(val => {
            console.log(val);
            console.log("-------------------------------------------------------------------------------")

            const intern = new Intern(val.iName, val.iId, val.iEmail, val.iSchool)

            team.push(intern);

            addTeam();
        })
    }
}

module.exports = team;

addTeam();