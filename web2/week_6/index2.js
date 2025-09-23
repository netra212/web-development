// https://projects.100xdevs.com/tracks/auth-mern/Authentication-8
/*
- Auth in Node.js
- Token based approach. 

*/
// jwt encode and decode. 

const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "netra123";

const app = express();
app.use(express.json());


const users = [];

function logger(req, res, next) {
    console.log(`${req.method}`, "request came");
    next();
}

// localhost:3000
app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", logger, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    // we should check if a user with this username already exists. 

    res.json({
        message: "You are signed up."
    })
})

app.post("/signin", logger, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i] === password) {
            foundUser = users[i];
        }
    }

    if (!foundUser) {
        res.json({
            message: "Sorry, your credentials does not exist."
        })
        return
    } else {
        const token = jwt.sign({
            username: users[i].username
        }, JWT_SECRET)

        res.header("jwt", token);
        res.header("random", "netra");

        res.json({
            token: token
        })
    }
})


// Assignment: Creating an auth middleware
// Can you try creating a middleware called auth that verifies if a user is logged in and ends the request early if the user isn’t logged in ?
function auth(req, res, next){
    // red = {status, headers...., username, password, userFirstName}
    const token = req.headers.token; // extracting tokens. 
    const decodedData = jwt.verify(token, JWT_SECRET); // verifying users. 

    if(decodedData.username){
        req.username = decodedData.username;
        next()
    }
    else{
        res.json({
            message: "You are not logged in"
        })
    }
}

app.get("/me", logger, auth, function (req, res) {

    const currentUser = req.username;

    const foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === req.username) {
            foundUser = users[i];
        }
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    })

})


app.listen(3000);