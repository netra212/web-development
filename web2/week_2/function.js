
// Finding the sum of two numbers. 
function sum(a, b){
    return a + b;
}

let ans = sum("20", 30);
console.log(ans);


// Finding the sum of the number from 1 to n.
function sum1(n){
    let ans = 0;
    for (let i = 0; i <= n; i++){
        ans = ans + i
    }
    return ans;
}
let res = sum1(10);
console.log(res);

// Try to create the promisfied version of setTimeout.
// fetch
// fs.readFile

function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = ans + i
    }
    return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);

// 
const fs = require("fs");

const content = fs.readFile("a.txt", "utf-8");  // Asynchronously. 
console.log(content);

const contents = fs.readFileSync("a.txt", "utf-8"); // Synchronously. 
console.log(contents);

// start all 3 tasks together, and wait for them to finish.
const fs = require("fs");

function afterFileRead(err, data){
    if(err){
        console.log("Error Found in reading the file.");
    }
    else{
        console.log("Error not Found in the file.");
    }
}

fs.readFile("a.txt", "utf-8", afterFileRead)
fs.readFile("b.txt", "utf-8", afterFileRead)
console.log("Done....!");


// functional arugment: passsing an function to another function as arugments. 

// setTimeout -> another asynchronous function that executes a certain code after some time. 
function run(){
    console.log("I will run after Ls");
}

setTimeout(run, 10);
console.log("I will run immediately");
