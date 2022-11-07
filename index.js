import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()
dotenv.config()
const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connect to mongoDB ")
    } catch (error) {
        throw error;
    }
};

connect()
app.listen(8800, () => {
    console.log("Connect to backend.")
})