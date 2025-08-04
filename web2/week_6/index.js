// Authenticatin in Node.js
const express = require("express");
const app = express();

// Implementing the middleware.
app.use(express.json());

/*
    [
        {
            username: "netra123",
            password: "1231213",
            token: "asdjsdfwe80jlsdf90"
        }
    ]
*/
const users = [];


// should return random long string.
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < token.length; i++) {
        token = token + options[Math.floor(Math.random() * options.length)];
    }
    return token;
}


// signup handler. 
app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed up"
    })
    console.log(users);
})


// sigin handler. 
app.post("/sigin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            foundUser = users[i];
        }
    }

    if (foundUser) {
        const token = generateToken();
        foundUser.token = token;
        req.json({
            message: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users);
})


app.get("/me", function (req, res) {
    const token = req.headers.token;
    const foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].token == token) {
            foundUser = users[i];
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.json({
            message: "Invalid Token"
        })
    }
})



app.listen(3004);


