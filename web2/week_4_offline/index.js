// # Middleware:
    // 1. Execute any code. 
    // 2. Make changes to the request and the response objects. 
    // 3. End the request-response cycle. 
    // 4. Call the next middleware function in the stack.

const express = require("express");

const app = express();

function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if (age >= 14) {
        next();
    }
    else {
        res.json({
            msg:"Sorry you are not of age yet.";
        });
    }
}

app.use(isOldEnoughMiddleware);

app.get("/ride1",function(req, res){
    res.json({
        msg: "You have successfully riden the ride 1."
    });
});

app.get("/ride2",function (req, res) {
    res.json({
        msg: "You have successfully riden the ride 1."
    });
});

app.listen(3000);


