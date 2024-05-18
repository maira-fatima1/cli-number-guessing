#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer Will generate a random number - Done. 
// 2) user input for guessing number - Done
// 3) compare user input with computer generated number and show result - Done
console.log("\n\tWelcome to \'My-Cli-Number-Guessing-Game'\n");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter Your guess a number between 1-10:",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulatios! You guessed correct number.");
}
else {
    console.log("Sorry! You guessed wrong number");
}
console.log("\n\tThanks for using \'My-Cli-Number-Guessing-Game'\n");
