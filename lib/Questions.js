module.exports = {
    managerQu: [
        {
            type: "input",
            name: "name",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's ID?",
            validate: function (input) {
                if (employeeIdArr.indexOf(input) !== -1) {
                    return "ID already exists, please enter a valid ID.";
                } return true;
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's office number?",
            validate: function (input) {
                if (input.length < 10) {
                    return "There is not enough digits in your phone number";
                } else if (input.length > 10) {
                    return "There are too many digits in your phone number";
                } return true;
            }
        }
    ],
    engineerQu: [
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your engineer's ID?",
            validate: function (input) {
                if (employeeIdArr.indexOf(input) !== -1) {
                    return "ID already exists, please enter a valid ID.";
                } return true;
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "username",
            message: "What is your engineer's Github username?"
        }
    ],
    internQu: [
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your intern's ID?",
            validate: function (input) {
                if (employeeIdArr.indexOf(input) !== -1) {
                    return "ID already exists, please enter a valid ID.";
                } return true;
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
        }
    ],
    newMember: [
        {
            type: "list",
            name: "teamMember",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
        }
    ]
}