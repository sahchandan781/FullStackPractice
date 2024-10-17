import mongoose from "mongoose"
import "dotenv/config"
import express from "express"
import connectDB from "./db/index.js"


const app = express()

connectDB()

app.listen(process.env.PORT, () => {
    console.log("hii")
})
