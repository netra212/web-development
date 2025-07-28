
// import chalk from 'chalk';

// // const chalk = require('chalk');

// console.log(chalk.blue('Hello, world!'));
// console.log(chalk.red.bold('This is an error message'));
// console.log(chalk.green.underline('This is a success message.'));

// const fs = require("fs");
// const path = require("path");

// const filepath = path.join(__dirname, "a.txt");

// fs.readFile(filepath, 'utf8', (err, data) => {
//     if (err){
//         console.log("Issues reading file.");
//     }
//     else{
//         console.log(data);
//     }
// })

// Create a Command Line Interface.: that lets the user specify a file path and 
const fs = require("fs");
const { Command } = require("commander");

const program = new Command();

program.name("counter").description("CLI to do file based tasks.").version("0.8.0");

program.command("count").description("Count the number of lines in a file.").argument("<file>", "file to count").action((file) => {
    fs.readFile("a.txt", "utf-8", (err, data) => {
        if (err){
            console.log(err);
        }
        else{
            const lines = data.split("\n").length;
            console.log(`There are ${lines} lines in ${file}`);
        }
    })
})

program.parse();
