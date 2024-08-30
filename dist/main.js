#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRed("--<Words Counter>--\n"));
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "Input",
        message: "Type here:"
    },
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`There are ${chalk.red(words.length)} Words in this Sentence.`);
