import mongoose from "mongoose";

let UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phone: String,
    salary: Number,
});

export default mongoose.model("User", UserSchema);