const bcrypt = require("bcrypt");
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "asdas123@gmail.com";
const mongoose = require("mongoose");

import { z } from require("zod");

mongoose.connect("mongodb+srv://kcnetrabahadur98:fCytJWdySSlNA5mZ@cluster0.dmfas0c.mongodb.net/todo-netra-2");

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {

    // Check that the password has 1 uppercase char, 1 lowercase character, and 1 special character. 
    // req.body 
    /*
        {
            email: string, 
            password: string,
            name: string
        }
    */
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(100)
    })

    // Parsing the data. 
    // const parseData = requiredBody.parse(req.body);
    const parseDataWithSuccess = requiredBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        res.json({
            message: "Incorrect Format",
            error: parseDataWithSuccess.error
        })
        return
    }

    /*
        {
            success: true | false,
            data: {},
            errors: []
        }
    */

    // 1. How to show the exact error. 
    // 2. 

    // Input Validation.
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    // Input Validation.

    let errorThrown = false;

    try {
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log("This is my hashed Password: ", hashedPassword);

        // Return Promise. 
        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        });
        throw new Error("User already exists.");
    } catch (e) {
        res.status(403).json({
            message: "User already exist."
        })
        errorThrown = true;
    }

    if (!errorThrown) {
        res.json({
            message: "You are signed up"
        })
    }
})

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email
    })

    if (!response) {
        res.status(403).json({
            message: "User does not exist in our database."
        })
        return
    }

    const passwordMatch = await bcrypt.compare(password, response.password);

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

app.listen(3000);