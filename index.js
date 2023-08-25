import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import routings from "./src/routes/routes.js"


dotenv.config()

const app=express()
mongoose.connect('mongodb+srv://santhumacha95:santhu35db@cluster0.jj32hfz.mongodb.net/emp-managment')
.then(console.log(`DB Connected on port 1111 `))
.catch(err=>{
    console.log(err);
    console.log("Error")
})

app.use(cors())

app.use(express.json())

app.use('/emp', routings)

app.listen(1111,(req,res)=>{
    console.log("Server running on port number 1111");
})