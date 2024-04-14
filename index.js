#! usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a number
// 2) User input for guessing a number
// 3) Compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 6:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("Sorry! you guessed wrong number.");
}
//The END! 
