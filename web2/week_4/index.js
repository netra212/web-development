// Node JS and Runtime.
/*
 * Node.js is a open source run-time for the javascript that allows us to execute javascript code on the server side. It's built on Chrome's V8 Javascript engine.
 * Runtime -> the environment where the javascript code runs or is executed. It could be
 * 1. on the server.
 * 2. in the browser.
 * 3. On a small watch.
 *
 *
 */

import chalk from "chalk";

const chalk = require("chalk");

console.log(chalk.blue("Hello, world!"));
console.log(chalk.red.bold("This is an error message"));
console.log(chalk.green.underline("This is a success message."));

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
// const fs = require("fs");
// const { Command } = require("commander");

// const program = new Command();

// program.name("counter").description("CLI to do file based tasks.").version("0.8.0");

// program.command("count").description("Count the number of lines in a file.").argument("<file>", "file to count").action((file) => {
//     fs.readFile("a.txt", "utf-8", (err, data) => {
//         if (err){
//             console.log(err);
//         }
//         else{
//             const lines = data.split("\n").length;
//             console.log(`There are ${lines} lines in ${file}`);
//         }
//     })
// })

// program.parse();

const experss = require("express");

const app = experss();

// Define route handlers.
app.get("/", function (req, res) {
  res.send("Hello World.");
});

app.get("/asd", function (req, res) {
  res.send("Hello World from the asda endpoint.");
});

// Sending json.
app.post("/", function (req, res) {
  res.json({
    hi: "k xa tmro",
  });
});

// Sending html.
app.post("/", function (req, res) {
  res.html("<b>Hi there.</b>");
});

app.post("/", function (req, res) {
  res.send("Hello World from the post end point.");
});

app.listen(3000);

let users = {
  1: {
    todos: [],
  },
  2: {
    todos: [],
  },
};

let todos = [];

// store the data in a file, foundation for database.
// add user logic.
app.post("/", function (req, res) {
  // create a random id for the todo.
  // extract the todo title from the body.
  todos.push({
    title,
    id,
  });
});

app.delete("/", function (req, res) {
  // extract the todo id.
  // remove the todo from here.
});

app.get("/", function (req, res) {
  res.json({
    todos,
  });
});
