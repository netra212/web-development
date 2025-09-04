import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb://localhost:2701/brainly");

const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String
})

export const UserModel = new Model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{ types: mongoose.Types.ObjectId, ref: "Tag" }],
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },

})

export const ContentModel = model("Content", ContentSchema);




