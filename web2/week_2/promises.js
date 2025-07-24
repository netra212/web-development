class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        const area = this.width * this.height;
        console.log(this);
        return area;
    }

    paint(){
        console.log(`Painting with color : ${this.color}`);
    }
}

const rect = new Rectangle(2, 4, "red");
const area = rect.area();
console.log(rect.paint());
console.log(area);

// Date. 
const now = new Date(); // Current date and time. 
console.log(now.toISOString());
console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getFullYear());

// Map. 
const map = new Map();
map.set(
    'name', 'Alice'
);
map.set(
    'age',
    30
);

const firstName = map.get("name");
console.log(map.get('name'));

// 1. Introduced how to create a class and use it - hard (new)
// 2. We used some JS provided classes (Map, Date)
// 3. We are going to introduce the `Promise` class. 

// Promise class gives us a promise, that I will return u somethig in the future. 
// setTimeout(fn, 3000)
function logName(){
    console.log("Netra khatri...!");
}

setTimeout(logName, 3000);

// callback based approach.  
// promise based approach. 

// Defining a promise is hard. 
// Using a promise is easy. 


// Promises. 
// A Promise in Javascript is an object that represents the eventual completion (or failure) of an asynchronous operation and is resulting value. 

function main(){

}

setTimeout(main, 3000); // once the 3 seconds passed, then callback the `main` function. 
// Callback version. 
// setTimeout(callback, 3000)

// Promisified version.
// setTimeoutPromisified(3000).then(callback);

function setTimeoutPromisified(ms){
    let p = new Promise(resolve => setTimeout(resolve, ms));
    console.log("something happening here...");
    console.log("Promises are just a syntactically superior way to write instead of callback.")
    return p;

    // returning the object of the Promise classes. 
}

function callback(){
    console.log("3 seconds have been passed.");
}

setTimeoutPromisified(3000).then(callback);

// Create a Promisefied version of fs.readFile, fs.writeFile, cleanFile.
const fs = require("fs");

function readTheFile(sendTheFileValueHere){
    // do ur thing, whenever u have the final value, call sendTheFileValueHere
    fs.readFile("a.txt", "utf-8", function(err, data){
        sendTheFileValueHere(data);
    })
}
function readFile(){
    // read the file and return its value. 
    return new Promise(readTheFile)
}
const p = readFile("a.txt");
function callback(contents){
    console.log(contents);
}
p.then(callback);





