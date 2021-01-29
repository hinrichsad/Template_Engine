const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const render = require("./lib/htmlRenderer");
const path = require("path");
const fs = require("fs");
const { choices } = require("yargs");

//defines path to the output html "team"
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamList = [];

const addTeam = async () =>{

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
            //routes the user to different prompts based on job title
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
                console.log(teamList);
                repeat();
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
                //creates a new instance and then prompts the user to make a new employee or finish the teamList
            const manager = new Manager(val.mName, val.mId, val.mEmail, val.mOffice)

            teamList.push(manager);

            repeat();
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

            teamList.push(engineer);

            repeat();
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

            teamList.push(intern);

            repeat();
        })
    }
        //decides when to stop the function
    const repeat = () => {
        inquirer.prompt([
            {
                type: "list",
                name: "rep",
                message: "Add another employee?   ",
                choices: [
                    "YES",
                    "NO"
                ]
            }
        ]).then(resp => {
            if(resp.rep === "YES"){
                addTeam()
            } else {
                console.log(teamList)}
                if (fs.existsSync (OUTPUT_DIR) != true ) {
                    fs.mkdirSync(OUTPUT_DIR)
                }
                fs.writeFile(outputPath, render(teamList), (err) =>
                    err ? console.log(err) : console.log("Success! Here is your Team!")
                )
        });
    }
}

addTeam();

module.exports = teamList;
