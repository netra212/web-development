"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
mongoose.connect("mongodb://localhost:2701/brainly");
const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String
});
exports.UserModel = new Model("User", UserSchema);
//# sourceMappingURL=db.js.map