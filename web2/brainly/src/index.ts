import middleware = require("./middleware");

const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { UserModel } = require("./db");

const app = express();

app.use(express.json());

const JWT_PASSWORD = "12314";

app.post("/api/v1/signup", async (req, res) => {
    // TODO: zod validation, hash the password. 
    const username = req.body.username;
    const password = req.body.password;

    try {
        await UserModel.create({
            username: username,
            password: password
        })
        res.json({
            message: "User signed up"
        })
    } catch (e) {
        res.status(411).json({
            message: "User already exists"
        })
    }
});

app.post("/api/v1/sigin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({
        username,
        password
    })

    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)

        res.json({
            token
        })
    } else {
        res.status(400).json({
            messsage: "Incorrect Credentials"
        })
    }
});

app.post("/api/v1/content", middleware.userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;

    await ContentModel.create({
        link,
        type,
        userId: req.userId,
        tags: []
    })
});

app.get("/api/v1/content", middleware.userMiddleware ,(req, res) => {
    // @ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")

    res.json({
        content
    })
});

app.delete("/api/v1/content", async (req, res) => {
    const contentId = req.body.contentId;
    // @ts-ignore
    await ContentModel.deleteMany({
        contentId,
        userId: req.userId
    })
});

app.post("/api/v1/brain/share", (req, res) => {

});

app.get("/api/v1/brain/:shareLink", (req, res) => {

});

app.listen(3000);