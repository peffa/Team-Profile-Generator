const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

const util = require("util");
const { managerQu, engineerQu, internQu, newMember } = require("./lib/Questions");
const asyncWriteFile = util.promisify(fs.writeFile);

employeeIdArr = [];
teamArr = [];

async function init() {
    try {
        console.log(`\nBuild your team:`);
        const { id, name, email, officeNumber } = await inquirer.prompt(managerQu);
        const manager = new Manager(name, id, email, officeNumber);
        employeeIdArr.push(id);
        teamArr.push(manager);
        await nextMember();
    }
    catch(err) {
        console.log(err);
    }
}

async function displayQuestions(role) {
    try {
        const { id, name, email, username, school } = await inquirer.prompt(role);

        switch (role) {
            case engineerQu:
                const engineer = new Engineer(name, id, email, username);
                employeeIdArr.push(id);
                teamArr.push(engineer);
                return nextMember();
            default:
                const intern = new Intern(name, id, email, school);
                employeeIdArr.push(id);
                teamArr.push(intern);
                return nextMember();
        }
    }
    catch(err) {
        console.log(err);
    }
}

async function nextMember() {
    try {
        const { teamMember } = await inquirer.prompt(newMember);
        switch (teamMember) {
            case "Engineer":
                return displayQuestions(engineerQu);
            case "Intern":
                return displayQuestions(internQu);
            default:
                console.log("Your Team has been Created!");
                renderHTML();
        }
    }
    catch(err) {
        console.log(err);
    }
}

function checkDirectory(directory) {  
    try {
        fs.statSync(directory);
    } catch(e) {
        fs.mkdirSync(directory);
    }
}

async function renderHTML() {
    try { 
        const newHTML = await render(teamArr);
        await checkDirectory("./output");
        await asyncWriteFile(outputPath, newHTML);
    }
    catch(err) {
        console.log(err);
    }
}

init();
