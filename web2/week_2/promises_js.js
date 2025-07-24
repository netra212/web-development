
// async wait >> promise chains >> callback hell. 

// Synchronous in JS. 
console.log("one");
console.log("two");

// Asynchronous in JS.
// Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a dealy in the UI. Asynchronous code execution allows to execute next instructions immediately and does not block the flow.

setTimeout(() => {
    console.log("Hello.....!");
}, 4000); // timeout; 2s => 2000ms


console.log("three");
console.log("four");

// Addition of two numbers. 
function sum(a, b) {
    console.log(a + b);
}
function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}
calculator(2, 3, sum);


// A callback is a function passed as an argument to another function.
const hello = () => {
    console.log("hello....My name is Netra kc");
}
setTimeout(hello, 2000);

// Callback Hell.
// Callback Hell: Nested callbacks stacked below one another forming a pyramid structure. (Pyramid of Doom).

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("Data", dataId);
        if (getNextData) {
            getNextData();
        }
        else {
            console.log("Function does not exist.");
        }
    }, 2000);
}
// callback hell.
getData(1, () => {
    console.log("Getting data 2.....");
    getData(2, () => {
        console.log("Getting data 3.....");
        getData(3, () => {
            console.log("Getting data 4.....");
            getData(4);
        });
    });
});

// Promise chaining.
console.log("Getting data 1.......");
getData(1)
    .then((res) => {
        return getData(2);
    })
    .then((res) => {
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    })

// Promises: is for "eventual" completion of task. It is an object in JS. 
// let promise = new Promise((resolve, reject) => {.....})
// resolve and reject are callbacks provided by JS. 
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a new promise.!");
//     resolve("I am solved...!");
//     reject("some error occured...!");
// })


/*

# Promises:

A Javascript Promise Object can be:
    1. Pending: the result is undefined. 
    2. Resolved: the result is a value (fulfilled).
    3. Rejected: the result is an error object.

- Promise has state (pending, fulfilled) & some result (result for resolve & error for reject).

# Promises can be implemented in two ways:

a. .then() & .catch()
b. promise.then((res) => {.....})
c. promise.catch((err) => {.....})

*/

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("Success.");
            // reject("error");
            if (getNextData) {
                getNextData();
            }
            else {
                console.log("Function does not exist.");
            }
        }, 5000);
    });
}

// Simple Promisefied Version here...
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        // resolve("success.!");
        reject("Network error");
    });
};
let promise = getPromise();
promise.then((res) => {
    console.log("Promise Fulfilled: ", res);
});
promise.catch((err) => {
    console.log("Promise is rejected: ", err);
});

// 
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some Data .... 1");
            resolve("success.");
        }, 4000);
    });
}

function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some Data .... 2");
            resolve("success.");
        }, 4000);
    });
}
// Promise Chaining ...!
console.log("Fetching Data ..... 1");
asyncFunction1().then((res) => {
    console.log("fetching data 2.....");
    return asyncFunction2().then((res) => {
        console.log("Returned Data 2....!");
    });
});

// Async - Await. 
// Async function always returns a promise. 
// async function myFunc(){......}
// await pauses the execution of its surrounding async function until the promise is settled.

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data...");
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData() {
    await api(); // 1st call. 
    await api(); // 2nd call. 
}

// Async-await. 
async function getAllData() {
    console.log("getting data 1.....");
    await getData(1);
    console.log("getting data 2.....");
    await getData(2);
    console.log("getting data 3.....");
    await getData(3);
}











