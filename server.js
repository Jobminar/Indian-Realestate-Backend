import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './router.js'
const app=express()
const PORT=process.env.PORT || 4000

dotenv.config()
app.use(cors())
app.use(express.json({limit:"40mb"}))
app.use('/',router)

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB connected successfully"))
.catch(()=>console.log("disconneted mongoDB"))

app.listen(PORT,()=>console.log(`server running ${PORT}`))