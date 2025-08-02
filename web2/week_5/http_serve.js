const express = require("express");
const app = express();

// Express frameworks is like a chain of middlewares. 

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

// middleware. 
function requestIncreaser(req, res, next) {
    requestCount = requestCount + 1;
    console.log("Total number of requests count:- " + requestCount);
    if(true){
        res.json({
            message: "I ended the request early."
        })
    }
    else{
        // If we did not call the next function then the middleware ended the request-response cycle.
        next();
    }
}



function realSumHandler(req, res){

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    });
}
app.get("/sum", requestIncreaser, realSumHandler);

// app.use(requestIncreaser) <-- can also be done. 



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



// admin endpoint.
app.get("/admin", function(){
    res.json({
        message: "This is the admin."
    })
});

// Assignment1.
// Create a middleware function that logs each incoming request's HTTP method, URL and timestamp to the console. 
function logsIncReqHtUrTim(req, res, next){

    const timestamp = new Date().toISOString();

    console.log("Method is: ",req.method);
    console.log(req.originalUrl);
    console.log(timestamp);
    next();
}
app.get("/logs", logsIncReqHtUrTim, function(req, res){
    res.json({
        message: "Logged successfully.",
        method: req.method,
        url: req.originalUrl,
        timestamp: req.timestamp
    })
})

// Assignment2.
// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it.
let countNumberRequestServer = 0;
function countRequestMiddleware(req, res, next){
    countNumberRequestServer = countNumberRequestServer + 1;
    next();
}
app.use(countNumberRequestServer);

app.get("/countRequest", function(req, res){
    res.json({
        message: "Counting the Number of Request to Server",
        NumberRequest: req.countNumberRequestServer
    })
})


// Used to parse incoming requests bodies that are formatted as json. This middlewares is essential for handling JSON payloads sent by clients in POST or PUT requests. 
const loggerMiddleware = require("logger");
const bodyParser = require("body-parser");
    
// Use express.json() middleware to parse JSON bodies
let middleware = express.json();

app.use(bodyParser.json());

app.post("/sum", function(req, res){
    console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        message: a + b
    })
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});