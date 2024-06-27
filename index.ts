import inquirer from "inquirer"

const randomNumber: number = Math.floor(10000 + Math.random() * 90000)

let myBalance: number = 0

let answer = await inquirer.prompt([
        {
            name: "Student",
            type: "input",
            message: "Enter Student Name",
            validate: function(value){
                if (value.trim() !== "") {
                return true;
                }
                return "Please enter a non-empty value."
                }
        },
        {
            name: "Courses",
            type: "list",
            message: "Select The Course To Enroll",
            choices: ["TypeScript", "JavaScript", "HTML & CSS", "Graphic Design", "Python"]
        }
    ]
)

const tutionFee: {[key: string]: number} = {
    "TypeScript": 2000,
    "JavaScript": 4999,
    "HTML & CSS": 6000,
    "Graphic Design": 8999,
    "Python": 19999
}

console.log(`\nTution Fees: ${tutionFee[answer.Courses]}\n`);
console.log(`Balance: ${myBalance}\n`);

let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select your payment method",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash", "SadaPay"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value){
            if (value.trim !== ""){
                return true
            } 
            return "Please enter a non-empty value."
        }
    }
])

console.log(`\nYou Select Payment Method: ${paymentType.payment}`);

const tutionFees = tutionFee[answer.Courses];
const paymentAmount = parseFloat(paymentType.amount)

if (tutionFees === paymentAmount){
    console.log(`Congratulations! You've successfully enrolled in ${answer.Courses}.\n`);

    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ])

    if (ans.select === "View Status"){
        console.log("\n**************Status**************\n");
        console.log(`Student Name: ${answer.Student}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.Courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
        
    }else {
        console.log("\Exiting Student Management System");
        
    }
} else {
    console.log("Please enter a valid amount");
}

