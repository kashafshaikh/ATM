#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        // =,+=,-=
        myBalance -= amountAns.amount;
        if (amountAns.amount <= myBalance) {
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else {
            console.log("insufficient number");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let amountOption = await inquirer.prompt([
            {
                name: "operation",
                message: "select option you want to withdraw",
                type: "list",
                choices: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
            }
        ]);
        myBalance -= amountOption.operation;
        console.log(`Your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("incorrect pin number");
}
