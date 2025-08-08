const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "asdas123@gmail.com";
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kcnetrabahadur98:fCytJWdySSlNA5mZ@cluster0.dmfas0c.mongodb.net/todo-netra-2");

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    // return Promise. 
    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "You are logged in."
    })

})

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(user);

    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
})

app.get("/todo", auth, async function (req, res) {
    const userId = req.userId;
    const title = req.body.title;

    await TodoModel.create({
        title,
        userId
    })

    res.json({
        userId: userId
    })
})

app.get("/todos", auth, async function (req, res) {
    const userId = req.userId;

    const users = await TodoModel.find({

    })

    res.json({
        userId: userId
    })
})

function auth(req, res, next) {
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData) {
        req.userId = decodedData.id;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
}

app.listen(3002);