
const express = require("express");
const app = express();
// Express frameworks is like a chain of middleware. 

// Biggest use of the middleware is for authentication, ending request response cycle and also call the next function. 
// 1. It may or may not change the request object. 
// 2. It will either stop the request right there. 
// 3. Or Forward the request to the real route handler. 


// // Middleware.
// app.use(function(req, res, next){
//     console.log("Request Received.");

//     // Modifying the request object. 
//     req.name = "netra kc.";

//     // Ending the request-response cycle. 
//     res.json({
//         message: "You are not allowed."
//     })

//     next();
// })

// app.get("/add/:firstArg/:secondArg", function(req, res){
//     requestIncreaser(req, res);

//     console.log(req.name);
//     const a = parseInt(req.params.firstArg);
//     const b = parseInt(req.params.secondArg);

//     res.json({
//         ans: a + b
//     });
// });

let requestCount = 0;

function requestIncreaser(req, res) {
    requestCount = requestCount + 1;
    console.log("Total number of requests count:- " + requestCount);
}

function realSumHandler(req, res){

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    });
}

app.get("/sum", requestIncreaser, realSumHandler);

function realMultiplier(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a * b
    })
}

app.get("/multiply", requestIncreaser, realMultiplier);

function realDivider(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a / b
    })
}

app.get("/divide", requestIncreaser, realDivider);

function realSubstract(req, res){

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a - b
    })
}

app.get("/substract", requestIncreaser, realSubstract);

app.listen(3000);